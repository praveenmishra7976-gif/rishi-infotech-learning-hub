import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/auth/getUserRole";

interface Props {
  allow: ("super_admin" | "admin" | "teacher" | "student")[];
  children: React.ReactNode;
}

export default async function RoleGuard({
  allow,
  children,
}: Props) {
  const role = await getUserRole();

  if (!role) {
    redirect("/auth/login");
  }

  if (!allow.includes(role as any)) {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}