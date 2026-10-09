<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Frontend architecture
- Keep the landing page in portable React/TypeScript components under `src/components/landing`; the index route owns only page composition and metadata so the UI can move into another React host.
- Keep all analysis data and visualizations static and all prototype actions local; this project intentionally has no product backend.
- Use the existing TanStack Start host and routing rather than installing another framework; portable UI is independent of the route host.
- Keep the dashboard in portable components under `src/components/dashboard`; it is a static, no-functionality UI (hardcoded streak, grade, focus, and roadmap values) so real data can replace it later without touching the route host.
- The app-wide typeface is Quicksand (loaded in `src/routes/__root.tsx`); keep it for all new pages.
- Pre-optimize the landing page's React UI dependencies and reject outdated optimized-module requests; accepting mixed dependency generations can split React's hook dispatcher during preview updates.
