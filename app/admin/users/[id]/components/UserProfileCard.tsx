import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import { getUserById } from "@/lib/users/getUserById";
import { notFound } from "next/navigation";

interface Props {
  userId: string;
}

export default async function UserProfileCard({
  userId,
}: Props) {
  const user = await getUserById(userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 h-36" />

      <div className="-mt-16 flex justify-center">

        <UserAvatar
          userId={user.id}
          avatar={user.avatar_url}
        />

      </div>

      <div className="p-8">

        <UserInfo user={user} />

      </div>

    </div>
  );
}