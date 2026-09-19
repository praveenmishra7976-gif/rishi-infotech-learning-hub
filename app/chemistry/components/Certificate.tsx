"use client";

import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import {
  CheckCircle2,
  Download,
  GraduationCap,
  Lock,
  Sparkles,
} from "lucide-react";

const TOTAL_CHAPTERS = 6;

export default function Certificate() {
  const [name, setName] = useState("");
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const loadProgress = () => {
    try {
      const stored = localStorage.getItem("chemistryCompletedChapters");

      if (!stored) {
        setCompletedChapters([]);
        return;
      }

      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        setCompletedChapters(
          parsed.filter(
            (item): item is string => typeof item === "string"
          )
        );
      } else {
        setCompletedChapters([]);
      }
    } catch {
      setCompletedChapters([]);
    }
  };

  useEffect(() => {
    loadProgress();

    const handleStorage = () => {
      loadProgress();
    };

    const handleProgressUpdate = () => {
      loadProgress();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(
      "chemistryProgressUpdated",
      handleProgressUpdate
    );

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(
        "chemistryProgressUpdated",
        handleProgressUpdate
      );
    };
  }, []);

  const trimmedName = name.trim();

  const completedCount = Math.min(
    new Set(completedChapters).size,
    TOTAL_CHAPTERS
  );

  const progressPercentage = Math.round(
    (completedCount / TOTAL_CHAPTERS) * 100
  );

  const isComplete = completedCount >= TOTAL_CHAPTERS;

  const generateCertificate = () => {
    if (!trimmedName || !isComplete || isGenerating) {
      return;
    }

    setIsGenerating(true);

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const centerX = pageWidth / 2;

      /*
       * Outer certificate border
       */

      pdf.setDrawColor(30, 64, 175);
      pdf.setLineWidth(2);

      pdf.rect(8, 8, pageWidth - 16, pageHeight - 16);

      pdf.setDrawColor(14, 165, 233);
      pdf.setLineWidth(0.8);

      pdf.rect(13, 13, pageWidth - 26, pageHeight - 26);

      /*
       * Decorative corner lines
       */

      pdf.setDrawColor(59, 130, 246);
      pdf.setLineWidth(0.5);

      const corner = 12;

      pdf.line(18, 25, 18 + corner, 25);
      pdf.line(18, 25, 18, 25 + corner);

      pdf.line(
        pageWidth - 18,
        25,
        pageWidth - 18 - corner,
        25
      );
      pdf.line(
        pageWidth - 18,
        25,
        pageWidth - 18,
        25 + corner
      );

      pdf.line(
        18,
        pageHeight - 25,
        18 + corner,
        pageHeight - 25
      );
      pdf.line(
        18,
        pageHeight - 25,
        18,
        pageHeight - 25 - corner
      );

      pdf.line(
        pageWidth - 18,
        pageHeight - 25,
        pageWidth - 18 - corner,
        pageHeight - 25
      );
      pdf.line(
        pageWidth - 18,
        pageHeight - 25,
        pageWidth - 18,
        pageHeight - 25 - corner
      );

      /*
       * Branding
       */

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(30, 64, 175);

      pdf.text(
        "RISHI INFOTECH LEARNING HUB",
        centerX,
        28,
        { align: "center" }
      );

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(100, 116, 139);

      pdf.text(
        "Free Education • Learn • Practice • Build",
        centerX,
        34,
        { align: "center" }
      );

      /*
       * Main title
       */

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(29);
      pdf.setTextColor(30, 64, 175);

      pdf.text(
        "CERTIFICATE OF COMPLETION",
        centerX,
        52,
        { align: "center" }
      );

      /*
       * Subtitle
       */

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.setTextColor(71, 85, 105);

      pdf.text(
        "This certificate is proudly presented to",
        centerX,
        65,
        { align: "center" }
      );

      /*
       * Student name
       */

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(27);
      pdf.setTextColor(22, 101, 52);

      const maxNameWidth = pageWidth - 70;

      let displayName = trimmedName;

      if (pdf.getTextWidth(displayName) > maxNameWidth) {
        while (
          displayName.length > 1 &&
          pdf.getTextWidth(displayName + "...") > maxNameWidth
        ) {
          displayName = displayName.slice(0, -1);
        }

        displayName += "...";
      }

      pdf.text(
        displayName,
        centerX,
        80,
        { align: "center" }
      );

      /*
       * Course completion text
       */

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.setTextColor(71, 85, 105);

      pdf.text(
        "for successfully completing the",
        centerX,
        93,
        { align: "center" }
      );

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.setTextColor(15, 23, 42);

      pdf.text(
        "Chemistry Learning Module",
        centerX,
        105,
        { align: "center" }
      );

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(100, 116, 139);

      pdf.text(
        "All 6 Chemistry chapters completed",
        centerX,
        114,
        { align: "center" }
      );

      /*
       * Completion badge
       */

      pdf.setFillColor(239, 246, 255);
      pdf.setDrawColor(59, 130, 246);
      pdf.setLineWidth(0.6);

      pdf.roundedRect(
        centerX - 28,
        121,
        56,
        13,
        3,
        3,
        "FD"
      );

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(30, 64, 175);

      pdf.text(
        "100% COMPLETED",
        centerX,
        129.5,
        { align: "center" }
      );

      /*
       * Date and certificate ID
       */

      const date = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      const certificateId = `RILH-CHEM-${Date.now()
        .toString()
        .slice(-8)}`;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(100, 116, 139);

      pdf.text(
        `Date: ${date}`,
        30,
        pageHeight - 29
      );

      pdf.text(
        `Certificate ID: ${certificateId}`,
        pageWidth - 30,
        pageHeight - 29,
        { align: "right" }
      );

      /*
       * Footer note
       */

      pdf.setFontSize(7.5);
      pdf.setTextColor(148, 163, 184);

      pdf.text(
        "This certificate confirms completion of the learning module on Rishi Infotech Learning Hub.",
        centerX,
        pageHeight - 20,
        { align: "center" }
      );

      pdf.save(
        `Rishi-Infotech-Chemistry-Certificate-${trimmedName
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")}.pdf`
      );
    } catch (error) {
      console.error("Certificate generation failed:", error);
      alert(
        "Unable to generate the certificate. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 mt-10">

      {/* Header */}

      <div className="flex items-start gap-4 mb-8">

        <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center">
          <GraduationCap
            className="text-blue-700"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-3xl font-black text-gray-900">
            Chemistry Certificate
          </h2>

          <p className="text-gray-500 mt-1">
            Complete all Chemistry chapters to unlock your certificate.
          </p>
        </div>

      </div>

      {/* Progress */}

      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-sm font-bold text-gray-500">
              COURSE PROGRESS
            </p>

            <p className="mt-1 text-xl font-black text-gray-900">
              {completedCount} / {TOTAL_CHAPTERS} Chapters Completed
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-black text-blue-700">
              {progressPercentage}%
            </p>
          </div>

        </div>

        <div className="mt-4 h-3 rounded-full bg-gray-200 overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
            style={{
              width: `${progressPercentage}%`,
            }}
          />

        </div>

      </div>

      {/* Name */}

      <div className="mt-7">

        <label
          htmlFor="chemistry-certificate-name"
          className="block text-sm font-black text-gray-700 mb-2"
        >
          Student Name
        </label>

        <input
          id="chemistry-certificate-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full border border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Certificate Preview */}

      {trimmedName && (

        <div className="mt-10">

          <div className="border-4 border-blue-700 rounded-3xl p-7 md:p-10 text-center bg-gradient-to-r from-blue-50 via-white to-cyan-50">

            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <Sparkles
                  className="text-blue-700"
                  size={28}
                />
              </div>
            </div>

            <p className="text-sm font-black uppercase tracking-widest text-blue-600 mt-5">
              Rishi Infotech Learning Hub
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-blue-700 mt-4">
              Certificate of Completion
            </h2>

            <p className="mt-7 text-lg text-gray-700">
              This certificate is proudly presented to
            </p>

            <h1 className="text-3xl md:text-5xl font-black mt-5 text-green-700 break-words">
              {trimmedName}
            </h1>

            <p className="mt-7 text-lg text-gray-700">
              for successfully completing
            </p>

            <h3 className="text-2xl font-black mt-3 text-gray-900">
              Chemistry Learning Module
            </h3>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-5 py-2 text-green-700 font-bold">
              <CheckCircle2 size={20} />
              {completedCount}/{TOTAL_CHAPTERS} Chapters Completed
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Rishi Infotech Learning Hub
            </p>

          </div>

        </div>

      )}

      {/* Locked state */}

      {!isComplete && (

        <div className="mt-7 rounded-2xl bg-amber-50 border border-amber-200 p-5">

          <div className="flex items-start gap-3">

            <Lock
              className="text-amber-600 shrink-0 mt-1"
              size={22}
            />

            <div>

              <p className="font-black text-amber-800">
                Certificate Locked
              </p>

              <p className="mt-1 text-sm text-amber-700 leading-6">
                Complete all {TOTAL_CHAPTERS} Chemistry chapters to unlock
                certificate generation.
              </p>

            </div>

          </div>

        </div>

      )}

      {/* Generate button */}

      <div className="mt-7 flex flex-col sm:flex-row gap-3">

        <button
          type="button"
          onClick={generateCertificate}
          disabled={!trimmedName || !isComplete || isGenerating}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-black text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
        >

          {isGenerating ? (
            <>
              Generating Certificate...
            </>
          ) : (
            <>
              <Download size={20} />
              Download Certificate PDF
            </>
          )}

        </button>

        {!isComplete && (
          <div className="flex items-center text-sm text-gray-500">
            Finish the Chemistry course first.
          </div>
        )}

      </div>

      {/* Disclaimer */}

      <p className="mt-5 text-xs text-gray-400 leading-5">
        This is a course-completion certificate issued by Rishi Infotech
        Learning Hub. It is not an accredited academic or government
        qualification.
      </p>

    </section>
  );
}