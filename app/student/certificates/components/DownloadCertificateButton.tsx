"use client";

interface Props {
  certificate: any;
}

export default function DownloadCertificateButton({
  certificate,
}: Props) {

  function download() {

    if (!certificate.pdf_url) {

      alert("Certificate PDF not generated yet.");

      return;

    }

    window.open(
      certificate.pdf_url,
      "_blank"
    );

  }

  return (

    <button

      onClick={download}

      className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold"

    >

      Download Certificate

    </button>

  );

}