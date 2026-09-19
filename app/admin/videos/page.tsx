"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  PlayCircle,
  Pencil,
  X,
  Save,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

interface Video {
  id: string;
  title: string;
  subject: string;
  duration: string;
  video_url: string;
  created_at?: string;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  // Add form
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");

  // Edit form
  const [editingVideo, setEditingVideo] =
    useState<Video | null>(null);

  const [editTitle, setEditTitle] = useState("");
  const [editSubject, setEditSubject] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editUrl, setEditUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deletingId, setDeletingId] =
    useState<string | null>(null);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  useEffect(() => {
    loadVideos();
  }, []);

  // ============================================
  // LOAD VIDEOS
  // ============================================

  async function loadVideos() {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Load videos error:", error);

      setErrorMessage(
        `Could not load videos: ${error.message}`
      );

      return;
    }

    setVideos(data || []);
  }

  // ============================================
  // CHECK ADMIN
  // ============================================

  async function checkAdmin() {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      throw new Error(
        `Authentication error: ${error.message}`
      );
    }

    if (!user) {
      throw new Error(
        "You are not logged in. Please log in again."
      );
    }

    const role = user.user_metadata?.role;

    console.log("CURRENT USER:", user);
    console.log("USER EMAIL:", user.email);
    console.log("USER ROLE:", role);

    if (
      role !== "admin" &&
      role !== "super_admin"
    ) {
      throw new Error(
        `Your current account does not have admin permission. Current role: ${
          role || "not set"
        }. Please log out and log in again.`
      );
    }

    return user;
  }

  // ============================================
  // ADD VIDEO
  // ============================================

  async function addVideo() {
    setErrorMessage("");
    setSuccessMessage("");

    if (!title.trim()) {
      setErrorMessage(
        "Please enter a video title."
      );
      return;
    }

    if (!subject.trim()) {
      setErrorMessage(
        "Please enter a subject."
      );
      return;
    }

    if (!url.trim()) {
      setErrorMessage(
        "Please enter a YouTube URL."
      );
      return;
    }

    setLoading(true);

    try {
      await checkAdmin();

      const { error } = await supabase
        .from("videos")
        .insert({
          title: title.trim(),
          subject: subject.trim(),
          duration: duration.trim(),
          video_url: url.trim(),
        });

      if (error) {
        console.error(
          "Add video error:",
          error
        );

        throw new Error(
          `Could not add video: ${error.message}`
        );
      }

      // Clear only after successful insertion.
      setTitle("");
      setSubject("");
      setDuration("");
      setUrl("");

      setSuccessMessage(
        "Video added successfully."
      );

      await loadVideos();
    } catch (error) {
      console.error(
        "Add video exception:",
        error
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not add video."
      );
    } finally {
      setLoading(false);
    }
  }

  // ============================================
  // OPEN EDIT FORM
  // ============================================

  function openEdit(video: Video) {
    setErrorMessage("");
    setSuccessMessage("");

    setEditingVideo(video);

    setEditTitle(video.title);
    setEditSubject(video.subject);
    setEditDuration(video.duration || "");
    setEditUrl(video.video_url);
  }

  // ============================================
  // CLOSE EDIT FORM
  // ============================================

  function closeEdit() {
    if (editing) {
      return;
    }

    setEditingVideo(null);

    setEditTitle("");
    setEditSubject("");
    setEditDuration("");
    setEditUrl("");
  }

  // ============================================
  // UPDATE VIDEO
  // ============================================

  async function updateVideo() {
    setErrorMessage("");
    setSuccessMessage("");

    if (!editingVideo) {
      return;
    }

    if (!editTitle.trim()) {
      setErrorMessage(
        "Please enter a video title."
      );
      return;
    }

    if (!editSubject.trim()) {
      setErrorMessage(
        "Please enter a subject."
      );
      return;
    }

    if (!editUrl.trim()) {
      setErrorMessage(
        "Please enter a YouTube URL."
      );
      return;
    }

    setEditing(true);

    try {
      await checkAdmin();

      const { error } = await supabase
        .from("videos")
        .update({
          title: editTitle.trim(),
          subject: editSubject.trim(),
          duration: editDuration.trim(),
          video_url: editUrl.trim(),
        })
        .eq("id", editingVideo.id);

      if (error) {
        console.error(
          "Update video error:",
          error
        );

        throw new Error(
          `Could not update video: ${error.message}`
        );
      }

      setSuccessMessage(
        "Video updated successfully."
      );

      setEditingVideo(null);

      setEditTitle("");
      setEditSubject("");
      setEditDuration("");
      setEditUrl("");

      await loadVideos();
    } catch (error) {
      console.error(
        "Update video exception:",
        error
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not update video."
      );
    } finally {
      setEditing(false);
    }
  }

  // ============================================
  // DELETE VIDEO
  // ============================================

  async function deleteVideo(id: string) {
    setErrorMessage("");
    setSuccessMessage("");

    const confirmed = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    try {
      await checkAdmin();

      const { error } = await supabase
        .from("videos")
        .delete()
        .eq("id", id);

      if (error) {
        console.error(
          "Delete video error:",
          error
        );

        throw new Error(
          `Could not delete video: ${error.message}`
        );
      }

      setSuccessMessage(
        "Video deleted successfully."
      );

      await loadVideos();
    } catch (error) {
      console.error(
        "Delete video exception:",
        error
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not delete video."
      );
    } finally {
      setDeletingId(null);
    }
  }

  // ============================================
  // UI
  // ============================================

  return (
    <main className="space-y-8">

      {/* ======================================
          HEADER
      ======================================= */}

      <div>
        <h1 className="text-5xl font-black text-gray-900">
          Video Management
        </h1>

        <p className="text-gray-500 mt-3">
          Add, edit and manage learning videos.
        </p>
      </div>

      {/* ======================================
          MESSAGES
      ======================================= */}

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-5">
          <p className="font-bold">
            ❌ Error
          </p>

          <p className="mt-1">
            {errorMessage}
          </p>
        </div>
      )}

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl p-5">
          <p className="font-bold">
            ✅ Success
          </p>

          <p className="mt-1">
            {successMessage}
          </p>
        </div>
      )}

      {/* ======================================
          ADD VIDEO
      ======================================= */}

      <div className="bg-white rounded-3xl shadow-lg p-8 space-y-5">

        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-3 rounded-xl">
            <Plus className="text-red-600" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Add New Video
            </h2>

            <p className="text-gray-500 text-sm">
              Add a YouTube learning video.
            </p>
          </div>
        </div>

        <input
          className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Video Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          disabled={loading}
        />

        <input
          className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          disabled={loading}
        />

        <input
          className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Duration (example: 10 minutes)"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
          disabled={loading}
        />

        <input
          className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-red-500"
          placeholder="YouTube URL"
          value={url}
          onChange={(e) =>
            setUrl(e.target.value)
          }
          disabled={loading}
        />

        <button
          type="button"
          onClick={addVideo}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition"
        >
          <Plus size={18} />

          {loading
            ? "Adding Video..."
            : "Add Video"}
        </button>
      </div>

      {/* ======================================
          VIDEO LIST
      ======================================= */}

      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-gray-900">
            All Videos
          </h2>

          <span className="bg-gray-100 px-4 py-2 rounded-xl font-bold text-gray-700">
            {videos.length}{" "}
            {videos.length === 1
              ? "Video"
              : "Videos"}
          </span>
        </div>

        {videos.length === 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <PlayCircle
              size={50}
              className="mx-auto text-gray-300"
            />

            <h3 className="text-xl font-bold text-gray-700 mt-4">
              No videos added yet
            </h3>

            <p className="text-gray-500 mt-2">
              Add your first learning video above.
            </p>
          </div>
        )}

        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Video Information */}

              <div className="min-w-0">

                <h3 className="text-2xl font-black text-gray-900 break-words">
                  {video.title}
                </h3>

                <p className="text-blue-600 font-semibold mt-2">
                  {video.subject}
                </p>

                {video.duration && (
                  <p className="text-gray-600 mt-2">
                    ⏱ {video.duration}
                  </p>
                )}

                <a
                  href={video.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 flex items-center gap-2 mt-4 font-bold"
                >
                  <PlayCircle size={20} />

                  Watch Video
                </a>

              </div>

              {/* Actions */}

              <div className="flex items-center gap-3 shrink-0">

                <button
                  type="button"
                  onClick={() =>
                    openEdit(video)
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 font-bold transition"
                >
                  <Pencil size={18} />

                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    deleteVideo(video.id)
                  }
                  disabled={
                    deletingId === video.id
                  }
                  className="bg-red-100 hover:bg-red-200 text-red-600 px-5 py-3 rounded-xl flex items-center gap-2 font-bold transition disabled:opacity-50"
                >
                  <Trash2 size={18} />

                  {deletingId === video.id
                    ? "Deleting..."
                    : "Delete"}
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ======================================
          EDIT VIDEO MODAL
      ======================================= */}

      {editingVideo && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}

            <div className="flex items-center justify-between p-6 border-b">

              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Edit Video
                </h2>

                <p className="text-gray-500 mt-1">
                  Update video information.
                </p>
              </div>

              <button
                type="button"
                onClick={closeEdit}
                disabled={editing}
                className="p-2 rounded-xl hover:bg-gray-100 disabled:opacity-50"
              >
                <X size={24} />
              </button>

            </div>

            {/* Modal Body */}

            <div className="p-6 space-y-5">

              <input
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Video Title"
                value={editTitle}
                onChange={(e) =>
                  setEditTitle(e.target.value)
                }
                disabled={editing}
              />

              <input
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
                value={editSubject}
                onChange={(e) =>
                  setEditSubject(e.target.value)
                }
                disabled={editing}
              />

              <input
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Duration"
                value={editDuration}
                onChange={(e) =>
                  setEditDuration(e.target.value)
                }
                disabled={editing}
              />

              <input
                className="border border-gray-300 p-4 rounded-xl w-full outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="YouTube URL"
                value={editUrl}
                onChange={(e) =>
                  setEditUrl(e.target.value)
                }
                disabled={editing}
              />

            </div>

            {/* Modal Footer */}

            <div className="flex justify-end gap-3 p-6 border-t">

              <button
                type="button"
                onClick={closeEdit}
                disabled={editing}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2"
              >
                <X size={18} />

                Cancel
              </button>

              <button
                type="button"
                onClick={updateVideo}
                disabled={editing}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
              >
                <Save size={18} />

                {editing
                  ? "Saving..."
                  : "Save Changes"}
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}