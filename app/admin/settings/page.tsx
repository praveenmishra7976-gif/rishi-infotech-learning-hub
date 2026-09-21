"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Globe,
  Mail,
  Phone,
  Lock,
  Save,
  Upload,
  Trash2,
  Image as ImageIcon,
  Sparkles,
  Check,
  Search,
  CalendarDays,
  MapPin,
  Palette,
  Star,
  X,
} from "lucide-react";

import {
  getSettings,
  updateSettings,
  uploadWebsiteLogo,
  removeWebsiteLogo,
} from "../actions/settings";

type EventCategory =
  | "All"
  | "Indian Festivals"
  | "India Events"
  | "Education Days"
  | "International Days"
  | "Special Themes";

type FestivalTheme = {
  id: string;
  name: string;
  emoji: string;
  category: Exclude<EventCategory, "All">;
  description: string;
  subtitle: string;
  date: string;
  location: string;
  colors: string[];
  background: string;
  primary: string;
  secondary: string;
};

const festivalThemes: FestivalTheme[] = [
  {
    id: "default",
    name: "Default",
    emoji: "✨",
    category: "Special Themes",
    description: "Clean professional learning theme",
    subtitle: "Everyday Learning",
    date: "All year",
    location: "Rishi Infotech",
    colors: ["#2563eb", "#4f46e5"],
    primary: "#2563eb",
    secondary: "#4f46e5",
    background:
      "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eff6ff 100%)",
  },

  {
    id: "diwali",
    name: "Diwali",
    emoji: "🪔",
    category: "Indian Festivals",
    description: "Festival of Lights",
    subtitle: "Lights • Joy • Knowledge",
    date: "Festival of Lights",
    location: "India",
    colors: ["#ea580c", "#facc15"],
    primary: "#ea580c",
    secondary: "#facc15",
    background:
      "linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fef3c7 100%)",
  },

  {
    id: "holi",
    name: "Holi",
    emoji: "🌈",
    category: "Indian Festivals",
    description: "Festival of Colours",
    subtitle: "Colours • Happiness • Togetherness",
    date: "Festival of Colours",
    location: "India",
    colors: ["#ec4899", "#8b5cf6", "#22c55e"],
    primary: "#db2777",
    secondary: "#7c3aed",
    background:
      "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #dbeafe 65%, #dcfce7 100%)",
  },

  {
    id: "navratri",
    name: "Navratri",
    emoji: "🌺",
    category: "Indian Festivals",
    description: "Nine Nights of Celebration",
    subtitle: "Devotion • Dance • Energy",
    date: "Navratri",
    location: "India",
    colors: ["#9333ea", "#ec4899", "#f59e0b"],
    primary: "#9333ea",
    secondary: "#ec4899",
    background:
      "linear-gradient(135deg, #fdf2f8 0%, #fae8ff 50%, #ede9fe 100%)",
  },

  {
    id: "dussehra",
    name: "Dussehra",
    emoji: "🏹",
    category: "Indian Festivals",
    description: "Victory of Good Over Evil",
    subtitle: "Courage • Knowledge • Victory",
    date: "Dussehra",
    location: "India",
    colors: ["#c2410c", "#f97316", "#facc15"],
    primary: "#c2410c",
    secondary: "#f97316",
    background:
      "linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fef3c7 100%)",
  },

  {
    id: "eid",
    name: "Eid",
    emoji: "🌙",
    category: "Indian Festivals",
    description: "Celebration of Peace and Togetherness",
    subtitle: "Peace • Family • Sharing",
    date: "Eid",
    location: "India",
    colors: ["#047857", "#d4af37"],
    primary: "#047857",
    secondary: "#d4af37",
    background:
      "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #ccfbf1 100%)",
  },

  {
    id: "christmas",
    name: "Christmas",
    emoji: "🎄",
    category: "Indian Festivals",
    description: "Season of Joy and Giving",
    subtitle: "Joy • Peace • Giving",
    date: "Christmas",
    location: "India",
    colors: ["#dc2626", "#166534"],
    primary: "#dc2626",
    secondary: "#166534",
    background:
      "linear-gradient(135deg, #fef2f2 0%, #fee2e2 45%, #ecfdf5 100%)",
  },

  {
    id: "guru-nanak",
    name: "Guru Nanak Jayanti",
    emoji: "🪯",
    category: "Indian Festivals",
    description: "Gurpurab Celebration",
    subtitle: "Peace • Equality • Service",
    date: "Gurpurab",
    location: "India",
    colors: ["#ca8a04", "#166534"],
    primary: "#ca8a04",
    secondary: "#166534",
    background:
      "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ecfccb 100%)",
  },

  {
    id: "republic-day",
    name: "Republic Day",
    emoji: "🇮🇳",
    category: "India Events",
    description: "Celebrating the Constitution of India",
    subtitle: "Constitution • Democracy • India",
    date: "26 January",
    location: "India",
    colors: ["#ff9933", "#ffffff", "#138808"],
    primary: "#2563eb",
    secondary: "#ea580c",
    background:
      "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #ecfdf5 100%)",
  },

  {
    id: "independence-day",
    name: "Independence Day",
    emoji: "🇮🇳",
    category: "India Events",
    description: "Celebrating India's Independence",
    subtitle: "Freedom • Unity • Pride",
    date: "15 August",
    location: "India",
    colors: ["#ff9933", "#ffffff", "#138808"],
    primary: "#ea580c",
    secondary: "#15803d",
    background:
      "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #ecfdf5 100%)",
  },

  {
    id: "gandhi-jayanti",
    name: "Gandhi Jayanti",
    emoji: "🕊️",
    category: "India Events",
    description: "Remembering Mahatma Gandhi",
    subtitle: "Peace • Truth • Non-Violence",
    date: "2 October",
    location: "India",
    colors: ["#15803d", "#f59e0b"],
    primary: "#15803d",
    secondary: "#f59e0b",
    background:
      "linear-gradient(135deg, #f0fdf4 0%, #ffffff 55%, #fffbeb 100%)",
  },

  {
    id: "constitution-day",
    name: "Constitution Day",
    emoji: "📜",
    category: "India Events",
    description: "Celebrating India's Constitution",
    subtitle: "Justice • Liberty • Equality",
    date: "26 November",
    location: "India",
    colors: ["#1e3a8a", "#f59e0b"],
    primary: "#1e40af",
    secondary: "#d97706",
    background:
      "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #fffbeb 100%)",
  },

  {
    id: "teachers-day",
    name: "Teachers' Day",
    emoji: "👩‍🏫",
    category: "Education Days",
    description: "Celebrating Teachers and Mentors",
    subtitle: "Learn • Guide • Inspire",
    date: "5 September",
    location: "India",
    colors: ["#7c3aed", "#f59e0b"],
    primary: "#7c3aed",
    secondary: "#f59e0b",
    background:
      "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #fffbeb 100%)",
  },

  {
    id: "childrens-day",
    name: "Children's Day",
    emoji: "🧒",
    category: "Education Days",
    description: "Celebrating Children and Learning",
    subtitle: "Curiosity • Creativity • Learning",
    date: "14 November",
    location: "India",
    colors: ["#0891b2", "#f97316"],
    primary: "#0891b2",
    secondary: "#f97316",
    background:
      "linear-gradient(135deg, #f0f9ff 0%, #ecfeff 50%, #fff7ed 100%)",
  },

  {
    id: "national-science-day",
    name: "National Science Day",
    emoji: "🔬",
    category: "Education Days",
    description: "Celebrating Science and Discovery",
    subtitle: "Discover • Explore • Innovate",
    date: "28 February",
    location: "India",
    colors: ["#2563eb", "#7c3aed"],
    primary: "#2563eb",
    secondary: "#7c3aed",
    background:
      "linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #faf5ff 100%)",
  },

  {
    id: "yoga-day",
    name: "International Yoga Day",
    emoji: "🧘",
    category: "International Days",
    description: "Celebrating Health, Balance and Wellbeing",
    subtitle: "Balance • Focus • Wellness",
    date: "21 June",
    location: "Worldwide",
    colors: ["#059669", "#0ea5e9"],
    primary: "#059669",
    secondary: "#0ea5e9",
    background:
      "linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 50%, #f0f9ff 100%)",
  },

  {
    id: "environment-day",
    name: "World Environment Day",
    emoji: "🌱",
    category: "International Days",
    description: "Learning for a Greener Planet",
    subtitle: "Nature • Sustainability • Future",
    date: "5 June",
    location: "Worldwide",
    colors: ["#15803d", "#16a34a"],
    primary: "#15803d",
    secondary: "#16a34a",
    background:
      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #ecfdf5 100%)",
  },

  {
    id: "new-academic-year",
    name: "New Academic Year",
    emoji: "🎓",
    category: "Special Themes",
    description: "Fresh Start for a New Learning Journey",
    subtitle: "Learn • Grow • Achieve",
    date: "Academic Session",
    location: "Rishi Infotech",
    colors: ["#2563eb", "#06b6d4"],
    primary: "#2563eb",
    secondary: "#06b6d4",
    background:
      "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #ecfeff 100%)",
  },

  {
    id: "exam-season",
    name: "Exam Season",
    emoji: "📚",
    category: "Special Themes",
    description: "Focused Study and Exam Preparation",
    subtitle: "Focus • Practice • Success",
    date: "Exam Season",
    location: "Rishi Infotech",
    colors: ["#1d4ed8", "#7c3aed"],
    primary: "#1d4ed8",
    secondary: "#7c3aed",
    background:
      "linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #faf5ff 100%)",
  },

  {
    id: "results-achievement",
    name: "Results & Achievement",
    emoji: "🏆",
    category: "Special Themes",
    description: "Celebrate Student Achievement",
    subtitle: "Progress • Achievement • Success",
    date: "Results",
    location: "Rishi Infotech",
    colors: ["#d97706", "#eab308"],
    primary: "#d97706",
    secondary: "#eab308",
    background:
      "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fff7ed 100%)",
  },
];

const categories: {
  id: EventCategory;
  label: string;
  emoji: string;
}[] = [
  { id: "All", label: "All Events", emoji: "✨" },
  {
    id: "Indian Festivals",
    label: "Indian Festivals",
    emoji: "🪔",
  },
  {
    id: "India Events",
    label: "India Events",
    emoji: "🇮🇳",
  },
  {
    id: "Education Days",
    label: "Education Days",
    emoji: "🎓",
  },
  {
    id: "International Days",
    label: "International Days",
    emoji: "🌍",
  },
  {
    id: "Special Themes",
    label: "Special Themes",
    emoji: "⭐",
  },
];

export default function SettingsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [websiteName, setWebsiteName] = useState(
    "Rishi Infotech Learning Hub"
  );

  const [email, setEmail] = useState(
    "admin@rishiinfotech.com"
  );

  const [phone, setPhone] = useState(
    "+91 9876543210"
  );

  const [primaryColor, setPrimaryColor] =
    useState("#2563eb");

  const [festivalTheme, setFestivalTheme] =
    useState("default");

  const [logoUrl, setLogoUrl] =
    useState<string | null>(null);

  const [password, setPassword] = useState("");

  const [category, setCategory] =
    useState<EventCategory>("All");

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await getSettings();

        if (data) {
          setWebsiteName(
            data.website_name ||
              "Rishi Infotech Learning Hub"
          );

          setEmail(data.support_email || "");

          setPhone(data.phone || "");

          setPrimaryColor(
            data.primary_color || "#2563eb"
          );

          setFestivalTheme(
            data.festival_theme || "default"
          );

          setLogoUrl(data.logo || null);
        }
      } catch (err) {
        console.error(err);
        setError("Unable to load settings.");
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  function selectFestival(theme: FestivalTheme) {
    setFestivalTheme(theme.id);
    setMessage("");
    setError("");
  }

  async function saveSettings() {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      await updateSettings({
        website_name: websiteName,
        support_email: email,
        phone,
        primary_color: primaryColor,
        festival_theme: festivalTheme,
      });

      // Refresh the Server Components/root layout so the
      // selected festival theme is applied across the entire website.
      router.refresh();

      // Also update the current document immediately without
      // waiting for navigation.
      document.documentElement.setAttribute(
        "data-festival-theme",
        festivalTheme || "default"
      );

      document.body.setAttribute(
        "data-festival-theme",
        festivalTheme || "default"
      );

      setMessage(
        `${selectedTheme.emoji} ${selectedTheme.name} theme has been saved successfully.`
      );
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to save settings."
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleLogoUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploading(true);
    setMessage("");
    setError("");

    try {
      const formData = new FormData();

      formData.append("file", file);

      const result =
        await uploadWebsiteLogo(formData);

      setLogoUrl(result.logoUrl);

      setMessage(
        "Website logo uploaded successfully."
      );
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Logo upload failed."
      );
    } finally {
      setUploading(false);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  async function handleRemoveLogo() {
    if (!logoUrl) {
      return;
    }

    if (
      !window.confirm(
        "Are you sure you want to remove the website logo?"
      )
    ) {
      return;
    }

    setUploading(true);
    setMessage("");
    setError("");

    try {
      await removeWebsiteLogo();

      setLogoUrl(null);

      setMessage(
        "Website logo removed successfully."
      );
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to remove logo."
      );
    } finally {
      setUploading(false);
    }
  }

  const selectedTheme =
    festivalThemes.find(
      (theme) => theme.id === festivalTheme
    ) || festivalThemes[0];

  const filteredThemes =
    festivalThemes.filter((theme) => {
      const matchesCategory =
        category === "All" ||
        theme.category === category;

      const searchText =
        `${theme.name} ${theme.description} ${theme.category} ${theme.subtitle}`
          .toLowerCase();

      const matchesSearch =
        !search ||
        searchText.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

          <p className="font-bold text-slate-600">
            Loading settings...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      {/* HEADER */}
      <div
        className="relative overflow-hidden px-4 py-10 md:px-8"
        style={{
          background: selectedTheme.background,
        }}
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
            <Sparkles size={18} />
            Admin Control Center
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                Website Settings
              </h1>

              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                Manage your website identity, branding,
                logo and India-focused festival and event
                themes from one place.
              </p>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur">
              <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                Active Theme
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-4xl">
                  {selectedTheme.emoji}
                </span>

                <div>
                  <div className="text-xl font-black text-slate-900">
                    {selectedTheme.name}
                  </div>

                  <div className="text-sm text-slate-500">
                    {selectedTheme.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-4 pt-8 md:px-8">
        {/* MESSAGES */}
        {message && (
          <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 font-bold text-green-700 shadow-sm">
            <Check size={20} />
            {message}
          </div>
        )}

        {error && (
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 font-bold text-red-700 shadow-sm">
            <span>{error}</span>

            <button
              type="button"
              onClick={() => setError("")}
              className="rounded-lg p-1 hover:bg-red-100"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* WEBSITE INFORMATION */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-7 flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <Globe size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Website Information
              </h2>

              <p className="text-sm text-slate-500">
                Basic information displayed across your website.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Website Name
              </label>

              <input
                value={websiteName}
                onChange={(e) =>
                  setWebsiteName(e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Support Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 p-4 pl-11 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Contact Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 p-4 pl-11 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Primary Color
              </label>

              <div className="flex gap-3">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) =>
                    setPrimaryColor(e.target.value)
                  }
                  className="h-14 w-16 cursor-pointer rounded-xl border bg-white p-1"
                />

                <input
                  value={primaryColor}
                  onChange={(e) =>
                    setPrimaryColor(e.target.value)
                  }
                  className="flex-1 rounded-xl border border-slate-200 p-4 font-mono uppercase outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-7 flex items-center gap-4">
            <div className="rounded-2xl bg-purple-100 p-3 text-purple-600">
              <ImageIcon size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Website Logo
              </h2>

              <p className="text-sm text-slate-500">
                Upload the logo that should appear throughout
                your website.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="Website logo"
                  className="max-h-full max-w-full object-contain p-3"
                />
              ) : (
                <div className="text-center text-slate-400">
                  <ImageIcon
                    className="mx-auto mb-2"
                    size={38}
                  />

                  <span className="text-xs font-bold">
                    No Logo
                  </span>
                </div>
              )}
            </div>

            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/svg+xml"
                onChange={handleLogoUpload}
                className="hidden"
              />

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={uploading}
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                  <Upload size={19} />

                  {uploading
                    ? "Uploading..."
                    : logoUrl
                      ? "Replace Logo"
                      : "Upload Logo"}
                </button>

                {logoUrl && (
                  <button
                    type="button"
                    disabled={uploading}
                    onClick={handleRemoveLogo}
                    className="flex items-center gap-2 rounded-xl bg-red-100 px-6 py-3 font-bold text-red-700 transition hover:bg-red-200 disabled:opacity-60"
                  >
                    <Trash2 size={19} />
                    Remove
                  </button>
                )}
              </div>

              <p className="mt-3 text-sm text-slate-500">
                PNG, JPG, WEBP or SVG. Maximum size: 5MB.
              </p>
            </div>
          </div>
        </section>

        {/* FESTIVAL MANAGER */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div
            className="relative overflow-hidden p-6 md:p-8"
            style={{
              background: selectedTheme.background,
            }}
          >
            <div className="absolute -right-16 -top-20 text-[180px] opacity-10">
              {selectedTheme.emoji}
            </div>

            <div className="relative">
              <div className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-600">
                <Sparkles size={18} />
                Theme Studio
              </div>

              <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
                Festival & India Events
              </h2>

              <p className="mt-2 max-w-3xl text-slate-600">
                Choose the visual identity for your entire
                learning platform. Festivals, national days,
                education days and special events can each
                have their own website experience.
              </p>
            </div>
          </div>

          {/* ACTIVE THEME */}
          <div className="border-b border-slate-200 p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-center gap-5">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-5xl shadow-lg"
                  style={{
                    background:
                      selectedTheme.background,
                  }}
                >
                  {selectedTheme.emoji}
                </div>

                <div>
                  <div className="mb-1 text-xs font-black uppercase tracking-widest text-slate-400">
                    Currently Selected
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {selectedTheme.name}
                  </h3>

                  <p className="text-slate-500">
                    {selectedTheme.subtitle}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {selectedTheme.category}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {selectedTheme.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {selectedTheme.colors.map(
                  (color) => (
                    <span
                      key={color}
                      className="h-10 w-10 rounded-full border-4 border-white shadow-md"
                      style={{
                        background: color,
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* CATEGORY NAVIGATION */}
          <div className="border-b border-slate-200 bg-slate-50 p-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => {
                const active =
                  category === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setCategory(item.id)
                    }
                    className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition ${
                      active
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-white text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH */}
          <div className="border-b border-slate-200 p-4 md:p-6">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search festivals, India events, education days..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* EVENT CARDS */}
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Choose an Event Theme
                </h3>

                <p className="text-sm text-slate-500">
                  {filteredThemes.length} theme
                  {filteredThemes.length === 1
                    ? ""
                    : "s"} available
                </p>
              </div>

              <div className="hidden items-center gap-2 text-sm font-bold text-slate-500 md:flex">
                <Palette size={17} />
                Global Website Theme
              </div>
            </div>

            {filteredThemes.length === 0 ? (
              <div className="rounded-3xl border-2 border-dashed border-slate-200 p-12 text-center">
                <Search
                  className="mx-auto mb-4 text-slate-300"
                  size={40}
                />

                <h3 className="text-lg font-black text-slate-700">
                  No events found
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Try another search or category.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredThemes.map((theme) => {
                  const selected =
                    festivalTheme === theme.id;

                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() =>
                        selectFestival(theme)
                      }
                      className={`group relative overflow-hidden rounded-3xl border-2 text-left transition-all duration-300 ${
                        selected
                          ? "border-slate-900 shadow-2xl ring-4 ring-slate-900/10"
                          : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                      }`}
                    >
                      {/* ART HEADER */}
                      <div
                        className="relative h-36 overflow-hidden p-5"
                        style={{
                          background:
                            theme.background,
                        }}
                      >
                        <div className="absolute -right-4 -top-8 text-[130px] leading-none opacity-20 transition-transform duration-500 group-hover:scale-110">
                          {theme.emoji}
                        </div>

                        <div className="relative">
                          <div className="flex items-start justify-between">
                            <span className="rounded-full bg-white/75 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-700 backdrop-blur">
                              {theme.category}
                            </span>

                            {selected && (
                              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg">
                                <Check size={18} />
                              </span>
                            )}
                          </div>

                          <div className="mt-5 text-5xl drop-shadow-sm">
                            {theme.emoji}
                          </div>
                        </div>
                      </div>

                      {/* CARD CONTENT */}
                      <div className="bg-white p-5">
                        <h4 className="text-xl font-black text-slate-900">
                          {theme.name}
                        </h4>

                        <p className="mt-1 text-sm font-semibold text-slate-500">
                          {theme.subtitle}
                        </p>

                        <p className="mt-3 min-h-[40px] text-sm leading-6 text-slate-500">
                          {theme.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-500">
                            <CalendarDays size={13} />
                            {theme.date}
                          </span>

                          <span className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-500">
                            <MapPin size={13} />
                            {theme.location}
                          </span>
                        </div>

                        <div className="mt-5 flex items-center justify-between">
                          <div className="flex gap-1.5">
                            {theme.colors.map(
                              (color) => (
                                <span
                                  key={color}
                                  className="h-5 w-5 rounded-full border-2 border-white shadow-sm"
                                  style={{
                                    background:
                                      color,
                                  }}
                                />
                              )
                            )}
                          </div>

                          <span
                            className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                              selected
                                ? "bg-slate-900 text-white"
                                : "bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white"
                            }`}
                          >
                            {selected
                              ? "Selected"
                              : "Use Theme"}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* THEME PREVIEW */}
          <div className="border-t border-slate-200 p-6 md:p-8">
            <div
              className="relative overflow-hidden rounded-3xl p-6 md:p-8"
              style={{
                background:
                  selectedTheme.background,
              }}
            >
              <div className="absolute -right-10 -top-10 text-[160px] opacity-10">
                {selectedTheme.emoji}
              </div>

              <div className="relative">
                <div className="mb-2 text-xs font-black uppercase tracking-widest text-slate-500">
                  Live Theme Preview
                </div>

                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-5xl">
                        {selectedTheme.emoji}
                      </span>

                      <div>
                        <h3 className="text-3xl font-black text-slate-900">
                          {selectedTheme.name}
                        </h3>

                        <p className="font-semibold text-slate-600">
                          {selectedTheme.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                      This visual identity will be used
                      across the public learning platform
                      after you save the settings.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedTheme.colors.map(
                      (color) => (
                        <span
                          key={color}
                          className="h-12 w-12 rounded-2xl border-4 border-white shadow-lg"
                          style={{
                            background: color,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PASSWORD */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-7 flex items-center gap-4">
            <div className="rounded-2xl bg-red-100 p-3 text-red-600">
              <Lock size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Change Admin Password
              </h2>

              <p className="text-sm text-slate-500">
                Password management for the administrator account.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="flex-1 rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() =>
                setError(
                  "Password management will be connected separately to Supabase Auth."
                )
              }
              className="rounded-xl bg-slate-900 px-6 py-4 font-bold text-white hover:bg-slate-800"
            >
              Update Password
            </button>
          </div>
        </section>

        {/* SAVE BAR */}
        <div className="sticky bottom-4 z-20 flex justify-end">
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur">
            <button
              type="button"
              onClick={saveSettings}
              disabled={saving}
              className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-black text-white shadow-lg transition hover:bg-green-700 disabled:opacity-60"
            >
              <Save size={20} />

              {saving
                ? "Saving..."
                : `Save ${selectedTheme.name} Theme`}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
