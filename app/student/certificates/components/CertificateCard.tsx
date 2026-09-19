import DownloadCertificateButton from "./DownloadCertificateButton";

interface Props {
  certificate: any;
}

export default function CertificateCard({
  certificate,
}: Props) {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700">

        {certificate.courses?.title}

      </h2>

      <p className="text-gray-500 mt-2">

        Certificate ID

      </p>

      <p className="font-semibold">

        {certificate.certificate_number}

      </p>

      <p className="text-gray-500 mt-6">

        Issued On

      </p>

      <p className="font-semibold">

        {new Date(
          certificate.issued_at
        ).toLocaleDateString("en-IN")}

      </p>

      <div className="mt-8">

        <DownloadCertificateButton
          certificate={certificate}
        />

      </div>

    </div>

  );

}