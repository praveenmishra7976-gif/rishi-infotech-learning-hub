type Certificate = {
  id: string;
  certificate_number: string;
};

export default function Certificates({
  certificates,
}: {
  certificates: Certificate[];
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        My Certificates
      </h2>

      <div className="space-y-4">

        {certificates.map((certificate) => (

          <div
            key={certificate.id}
            className="border rounded-xl p-4 flex justify-between items-center"
          >

            <div>

              <p className="font-bold">
                {certificate.certificate_number}
              </p>

            </div>

            <a
              href={`/certificate/${certificate.id}`}
              className="bg-blue-700 text-white px-6 py-3 rounded-xl"
            >
              View
            </a>

          </div>

        ))}

      </div>

    </div>
  );
}