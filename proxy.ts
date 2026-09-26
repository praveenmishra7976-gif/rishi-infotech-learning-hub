import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  /*
   * Check account status for authenticated users.
   *
   * Admin login is excluded from the redirect-to-dashboard rule below,
   * because a non-admin user may already be logged in and need to switch
   * to an administrator account.
   */
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("status, role")
      .eq("id", user.id)
      .maybeSingle();

    const status = String(profile?.status || "active").toLowerCase();

    if (
      (status === "suspended" || status === "blocked") &&
      pathname !== "/admin/login"
    ) {
      await supabase.auth.signOut();

      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("status", status);

      return NextResponse.redirect(loginUrl);
    }

    /*
     * Only an already-authenticated administrator should be redirected
     * away from the Admin Login page.
     */
    if (pathname === "/admin/login") {
      const role = String(profile?.role || "").toLowerCase();

      if (role === "admin" || role === "super_admin") {
        const dashboardUrl = request.nextUrl.clone();
        dashboardUrl.pathname = "/admin/dashboard";

        return NextResponse.redirect(dashboardUrl);
      }

      // Student/teacher/other users can remain on Admin Login
      // and sign in with a separate administrator account.
      return response;
    }
  }

  /*
   * Protect all admin pages except the login page.
   */
  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    !user
  ) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";

    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/auth/profile",
    "/dashboard/:path*",
    "/student-dashboard/:path*",
    "/profile",
    "/courses/:path*",
    "/course/:path*",
    "/learn/:path*",
    "/practice/:path*",
  ],
};
