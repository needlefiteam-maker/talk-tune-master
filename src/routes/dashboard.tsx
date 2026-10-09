import { createFileRoute } from "@tanstack/react-router";
import DashboardPage from "@/components/dashboard/dashboard-page";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [
    { title: "Your practice dashboard — Cadence" },
    { name: "description", content: "Your streak, your very first recording, your grade, and the skill you're working on this week." },
    { property: "og:title", content: "Your practice dashboard — Cadence" },
    { property: "og:description", content: "Your streak, your first recording, and what you're focusing on right now." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DashboardRoute,
});

function DashboardRoute() {
  return <DashboardPage />;
}
