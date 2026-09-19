"use client";

type CertificateProps = {
  studentName: string;
  courseName: string;
  certificateNumber: string;
  issueDate: string;
  instructor?: string;
};

export default function Certificate({
  studentName,
  courseName,
  certificateNumber,
  issueDate,
  instructor = "Rishi Infotech Learning Hub",
}: CertificateProps) {
  function downloadCertificate() {
    window.print();
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div
        id="certificate"
        className="bg-white w-full max-w-6xl border-[12px] border-yellow-500 rounded-3xl shadow-2xl p-16"
      >

        <div className="text-center">

          <h1 className="text-6xl font-extrabold text-blue-700">
            CERTIFICATE
          </h1>

          <p className="text-2xl mt-4 text-gray-600">
            OF COMPLETION
          </p>

        </div>

        <div className="mt-20 text-center">

          <p className="text-2xl text-gray-600">
            This Certificate is Proudly Presented To
          </p>

          <h2 className="text-6xl font-bold text-black mt-6">
            {studentName}
          </h2>

          <p className="text-2xl mt-10 text-gray-600">
            for successfully completing
          </p>

          <h3 className="text-4xl font-bold text-blue-700 mt-6">
            {courseName}
          </h3>

        </div>

        <div className="grid grid-cols-3 gap-10 mt-24">

          <div>

            <p className="font-bold">
              Certificate No.
            </p>

            <p>{certificateNumber}</p>

          </div>

          <div className="text-center">

            <div className="w-32 h-32 border-4 border-gray-300 rounded-xl flex items-center justify-center mx-auto">
              QR
            </div>

            <p className="text-sm mt-3 text-gray-500">
              Verification QR
            </p>

          </div>

          <div className="text-right">

            <p className="font-bold">
              Issue Date
            </p>

            <p>{issueDate}</p>

          </div>

        </div>

        <div className="grid grid-cols-2 mt-24">

          <div>

            <div className="border-t-2 border-black w-64"></div>

            <p className="mt-2 font-semibold">
              Authorized Signature
            </p>

          </div>

          <div className="text-right">

            <div className="border-t-2 border-black w-64 ml-auto"></div>

            <p className="mt-2 font-semibold">
              {instructor}
            </p>

          </div>

        </div>

        <div className="mt-16 text-center">

          <button
            onClick={downloadCertificate}
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl text-lg font-semibold"
          >
            🖨 Download / Print Certificate
          </button>

        </div>

      </div>

    </main>
  );
}