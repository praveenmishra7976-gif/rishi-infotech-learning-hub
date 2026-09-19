import CertificateCard from "./components/CertificateCard";
import { getCertificates } from "./lib/getCertificates";

export default async function CertificatesPage() {
  const certificates = await getCertificates();

  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          My Certificates
        </h1>

        <p className="text-gray-500 mt-2">
          Download all your earned certificates.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {certificates.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <h2 className="text-2xl font-bold">
              No Certificates Yet
            </h2>

            <p className="text-gray-500 mt-4">
              Complete a course to unlock your certificate.
            </p>

          </div>

        ) : (

          certificates.map((certificate: any) => (

            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />

          ))

        )}

      </div>

    </main>
  );
}