interface Props {
  params: Promise<{
    certificateId: string;
  }>;
}

export default async function VerifyCertificate({
  params,
}: Props) {

  const { certificateId } = await params;

  return (

    <main className="max-w-4xl mx-auto py-20">

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

        <h1 className="text-4xl font-bold text-green-600">

          Certificate Verified

        </h1>

        <p className="mt-6 text-gray-600">

          Certificate Number

        </p>

        <p className="font-bold text-2xl mt-2">

          {certificateId}

        </p>

      </div>

    </main>

  );

}