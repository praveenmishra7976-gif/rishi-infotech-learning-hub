import { notFound } from "next/navigation";

import { getUserById } from "@/lib/users/getUserById";

import UserProfileCard from "./components/UserProfileCard";
import UserRoleCard from "./components/UserRoleCard";
import AccountStatusCard from "./components/AccountStatusCard";
import EmailVerificationCard from "./components/EmailVerificationCard";
import PasswordResetCard from "./components/PasswordResetCard";
import ActivityTimeline from "./components/ActivityTimeline";
import LoginHistory from "./components/LoginHistory";
import UserActions from "./components/UserActions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          User Details
        </h1>

        <p className="text-gray-500 mt-2">
          User ID : {user.id}
        </p>

      </div>

      <div className="grid xl:grid-cols-3 gap-8">

        <div>

          <UserProfileCard userId={user.id} />

        </div>

        <div className="xl:col-span-2 space-y-6">

          <UserRoleCard
  userId={user.id}
  fullName={user.full_name}
  role={user.role}
/>

          <AccountStatusCard
            userId={user.id}
            status={user.status}
          />

          <EmailVerificationCard
            userId={user.id}
            verified={user.email_verified}
          />

          <PasswordResetCard
            email={user.email}
          />

          <UserActions />

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <ActivityTimeline userId={user.id} />

       <LoginHistory userId={user.id} />

      </div>

    </main>
  );
}