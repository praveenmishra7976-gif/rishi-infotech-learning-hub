
"use client";

import { useEffect, useRef, useState } from "react";
import { getStudentProgress } from "../lib/getStudentProgress";
import { updateLessonProgress } from "../lib/updateProgress";

type LessonProgressTrackerProps = {
  lessonId: string;
  videoUrl?: string | null;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    let videoId = "";

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.replace("/", "").split("/")[0];
    }

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v") || "";
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1]?.split("/")[0] || "";
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1]?.split("/")[0] || "";
      }
    }

    if (!videoId) {
      return null;
    }

    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  } catch {
    return null;
  }
}

function isYouTubeUrl(url: string) {
  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be")
  );
}

export default function LessonProgressTracker({
  lessonId,
  videoUrl,
}: LessonProgressTrackerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastSavedRef = useRef(0);

  const [watchedSeconds, setWatchedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      try {
        setLoadingProgress(true);

        const progress = await getStudentProgress(lessonId);

        if (cancelled) return;

        const savedSeconds = Math.max(
          0,
          Number(progress?.watched_seconds || 0)
        );

        setWatchedSeconds(savedSeconds);
        setCompleted(Boolean(progress?.completed));
        lastSavedRef.current = Math.floor(savedSeconds);

        const video = videoRef.current;

        if (
          video &&
          Number.isFinite(video.duration) &&
          video.duration > 0
        ) {
          video.currentTime = Math.min(
            savedSeconds,
            Math.max(0, video.duration - 0.5)
          );
        }
      } catch (error) {
        console.error(
          "Load lesson progress error:",
          error
        );
      } finally {
        if (!cancelled) {
          setLoadingProgress(false);
        }
      }
    }

    loadProgress();

    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  async function saveProgress(
    seconds: number,
    isCompleted: boolean
  ) {
    if (!lessonId) return;

    try {
      setSaving(true);

      await updateLessonProgress(
        lessonId,
        seconds,
        isCompleted
      );

      lastSavedRef.current = Math.floor(seconds);
    } catch (error) {
      console.error(
        "Lesson progress save error:",
        error
      );
    } finally {
      setSaving(false);
    }
  }

  function handleLoadedMetadata() {
    const video = videoRef.current;

    if (!video) return;

    const videoDuration = video.duration || 0;

    setDuration(videoDuration);

    const savedSeconds = Math.max(
      0,
      Number(watchedSeconds || 0)
    );

    if (savedSeconds > 0 && videoDuration > 0) {
      video.currentTime = Math.min(
        savedSeconds,
        Math.max(0, videoDuration - 0.5)
      );
    }
  }

  function handleTimeUpdate() {
    const video = videoRef.current;

    if (!video) return;

    const seconds = Math.floor(video.currentTime);

    setWatchedSeconds(seconds);

    if (
      seconds - lastSavedRef.current >= 10
    ) {
      saveProgress(seconds, false);
    }
  }

  function handleEnded() {
    const video = videoRef.current;

    if (!video) return;

    const seconds = Math.floor(
      video.duration || video.currentTime
    );

    setWatchedSeconds(seconds);
    setCompleted(true);

    saveProgress(seconds, true);
  }

  function handleVideoError() {
    setVideoError(true);
  }

  useEffect(() => {
    return () => {
      const video = videoRef.current;

      if (!video) return;

      const seconds = Math.floor(
        video.currentTime
      );

      if (seconds > lastSavedRef.current) {
        updateLessonProgress(
          lessonId,
          seconds,
          completed
        ).catch((error) => {
          console.error(
            "Final lesson progress save error:",
            error
          );
        });
      }
    };
  }, [lessonId, completed]);

  if (!videoUrl) {
    return (
      <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">
        <p className="font-semibold text-gray-700">
          Video not available
        </p>

        <p className="text-sm text-gray-500 mt-1">
          No video has been added to this lesson yet.
        </p>
      </div>
    );
  }

  /*
   * YOUTUBE VIDEO
   */

  if (isYouTubeUrl(videoUrl)) {
    const embedUrl = getYouTubeEmbedUrl(videoUrl);

    if (!embedUrl) {
      return (
        <div className="mt-5 rounded-2xl bg-red-50 border border-red-200 p-6 text-center">
          <p className="font-bold text-red-700">
            Invalid YouTube video URL
          </p>

          <p className="text-sm text-red-600 mt-1">
            Please check the video URL in the admin lesson editor.
          </p>
        </div>
      );
    }

    return (
      <div className="mt-5">

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">

          <iframe
            src={embedUrl}
            title="Lesson Video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

        <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">

          <p className="text-sm text-blue-700 font-semibold">
            YouTube video
          </p>

          <p className="text-xs text-blue-600 mt-1">
            YouTube videos cannot provide the same second-by-second
            progress tracking as uploaded course videos.
          </p>

        </div>

      </div>
    );
  }

  /*
   * DIRECT UPLOADED VIDEO
   */

  const percentage =
    duration > 0
      ? Math.min(
          100,
          Math.round(
            (watchedSeconds / duration) * 100
          )
        )
      : 0;

  return (
    <div className="mt-5">

      <div className="relative">

        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          className="w-full rounded-2xl bg-black shadow-lg"
          src={videoUrl}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onError={handleVideoError}
        >
          Your browser does not support video playback.
        </video>

        {loadingProgress && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 text-white font-bold pointer-events-none">
            Loading your progress...
          </div>
        )}

      </div>

      {videoError && (
        <div className="mt-4 rounded-2xl bg-red-50 border border-red-200 p-5">

          <p className="font-bold text-red-700">
            Video could not be played
          </p>

          <p className="text-sm text-red-600 mt-1">
            The video URL may be invalid, the file may have
            been deleted, or the uploaded format may not be
            supported by this browser.
          </p>

          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-bold text-blue-600 hover:underline"
          >
            Open video directly →
          </a>

        </div>
      )}

      {/* PROGRESS */}

      <div className="mt-4">

        <div className="flex items-center justify-between mb-2">

          <span className="text-sm font-semibold text-gray-600">
            Lesson Progress
          </span>

          <span className="text-sm font-bold text-blue-600">
            {percentage}%
          </span>

        </div>

        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

          <div
            className={`h-full transition-all ${
              completed
                ? "bg-green-500"
                : "bg-blue-600"
            }`}
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <div className="flex items-center justify-between mt-2">

          <span className="text-xs text-gray-500">
            Watched: {watchedSeconds}s
          </span>

          {completed ? (
            <span className="text-sm font-bold text-green-600">
              ✓ Lesson Completed
            </span>
          ) : saving ? (
            <span className="text-xs text-gray-400">
              Saving progress...
            </span>
          ) : (
            <span className="text-xs text-gray-400">
              Progress saved automatically
            </span>
          )}

        </div>

      </div>

    </div>
  );
}
