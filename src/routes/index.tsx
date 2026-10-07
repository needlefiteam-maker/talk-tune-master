import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Cadence — Become a better speaker" },
    { name: "description", content: "Become a better speaker by seeing how you speak. Discover clearer delivery through pace, pauses, filler words, and vocal variation." },
    { property: "og:title", content: "Cadence — Become a better speaker" },
    { property: "og:description", content: "Speak. Analyze. Improve. Repeat. A thoughtful way to build a clear, confident voice." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
