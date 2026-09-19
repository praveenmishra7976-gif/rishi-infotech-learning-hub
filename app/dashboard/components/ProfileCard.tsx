type Props = {
  name: string;
  email: string;
};

export default function ProfileCard({
  name,
  email,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex items-center gap-6">

        <div className="w-20 h-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-3xl font-bold">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            {name}
          </h2>

          <p className="text-gray-500">
            {email}
          </p>

        </div>

      </div>

    </div>
  );
}