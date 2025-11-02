import React, { useEffect, useState } from "react";
import {
  Twitter,
  Linkedin,
  Mail,
  Share2,
  Copy,
  Github,
  Loader2,
  MessageCircle,
} from "lucide-react";

/**
 * AuthorProfile
 * A responsive two-column author profile component for tutorial pages.
 * - Left column: GitHub contributor image, name, short bio
 * - Right column: Social share icons (Twitter, LinkedIn, WhatsApp, Email), copy link
 *
 * Props:
 *  - username: (string) GitHub username to fetch avatar and profile URL. Optional.
 *  - name: (string) Fallback / display name.
 *  - bio: (string) Short author bio.
 *  - url: (string) The tutorial URL to share. Defaults to window.location.href when available.
 *  - className: (string) Extra classes for the container.
 *
 * Example usage:
 *  <AuthorProfile
 *    username="ajay-dhangar"
 *    name="Ajay Dhangar"
 *    bio="Full-stack developer. Founder of CodeHarborHub. Loves clean UI & tutorials."
 *    url={"https://codeharborhub.github.io"}
 *  />
 */

const PlaceholderAvatar = ({ className = "w-20 h-20 rounded-full" }) => (
  <div
    className={`bg-gradient-to-br from-slate-300 to-slate-500 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center ${className}`}
  >
    <Github className="text-white w-10 h-10" />
  </div>
);

export default function AuthorProfile({
  username,
  name,
  bio,
  url,
  className = "",
}) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [loading, setLoading] = useState(Boolean(username));

  useEffect(() => {
    let cancelled = false;
    async function fetchGitHub() {
      if (!username) return setLoading(false);
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${encodeURIComponent(username)}`
        );
        if (!res.ok) throw new Error("GitHub user not found");
        const data = await res.json();
        if (!cancelled) {
          setAvatarUrl(data.avatar_url);
          setProfileUrl(data.html_url);
        }
      } catch (err) {
        // silently fallback to initials/avatar placeholder
        console.warn("AuthorProfile: couldn't fetch GitHub user", err.message);
        setAvatarUrl(null);
        setProfileUrl(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchGitHub();
    return () => (cancelled = true);
  }, [username]);

  const pageUrl =
    typeof url === "string"
      ? url
      : typeof window !== "undefined"
      ? window.location.href
      : "";

  function shareOnTwitter() {
    const text = encodeURIComponent(
      `${name || username || "Check this tutorial"}`
    );
    const share = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(
      pageUrl
    )}`;
    window.open(share, "_blank", "noopener,noreferrer");
  }

  function shareOnLinkedIn() {
    const share = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
    )}`;
    window.open(share, "_blank", "noopener,noreferrer");
  }

  function shareOnWhatsApp() {
    const text = encodeURIComponent(`${name || "Tutorial"} - ${pageUrl}`);
    const share = `https://wa.me/?text=${text}`;
    window.open(share, "_blank", "noopener,noreferrer");
  }

  function shareByEmail() {
    const subject = encodeURIComponent(`${name || "Tutorial"}`);
    const body = encodeURIComponent(
      `I thought you might find this useful: ${pageUrl}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      // subtle feedback: use alert for simplicity (you can replace with a toast system)
      alert("Link copied to clipboard");
    } catch (e) {
      // fallback: select text input
      prompt("Copy the link:", pageUrl);
    }
  }

  return (
    <section
      className={`w-full mx-auto bg-white/80 dark:bg-transparent rounded-2xl p-2 shadow-sm ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* LEFT: avatar + name + bio */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {loading ? (
              <div className="animate-pulse w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <Loader2 className="animate-spin w-8 h-8 text-slate-500" />
              </div>
            ) : avatarUrl ? (
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name || username} GitHub`}
              >
                <img
                  src={avatarUrl}
                  alt={`${name || username} avatar`}
                  className="w-20 h-20 rounded-full object-cover border-2 border-slate-100 dark:border-slate-800"
                />
              </a>
            ) : (
              <PlaceholderAvatar />
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
              {name || username || "Author"}{" "}
              {username && (
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1"
                >
                  <Github size={20} />
                </a>
              )}
            </h3>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {bio || "No bio available."}
            </p>
          </div>
        </div>

        {/* RIGHT: social icons */}
        <div className="flex flex-col sm:flex-row justify-end sm:items-center gap-3">
          <div className="flex gap-2">
            <button
              onClick={shareOnTwitter}
              aria-label="Share on Twitter"
              className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
            >
              <Twitter size={18} className="text-blue-500" />
            </button>

            <button
              onClick={shareOnLinkedIn}
              aria-label="Share on LinkedIn"
              className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
            >
              <Linkedin size={18} className="text-blue-600" />
            </button>

            <button
              onClick={shareOnWhatsApp}
              aria-label="Share on WhatsApp"
              className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-800/50 transition-colors"
            >
              <MessageCircle size={18} className="text-green-500" />
            </button>

            <button
              onClick={shareByEmail}
              aria-label="Share via Email"
              className="p-2 rounded-lg bg-pink-50 dark:bg-pink-900/30 hover:bg-pink-100 dark:hover:bg-pink-800/50 transition-colors"
            >
              <Mail size={18} className="text-pink-500" />
            </button>

            <button
              onClick={copyLink}
              aria-label="Copy Link"
              className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            >
              <Copy size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
