import Certificate from "../components/Certificate";

export default async function CertificatePage() {
  return (
    <Certificate
      studentName="Rish"
      courseName="Full Stack Web Development"
      certificateNumber="RI-20260729-001"
      issueDate={new Date().toLocaleDateString()}
      instructor="Rishi Infotech Learning Hub"
    />
  );
}