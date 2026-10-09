import { ArrowRight, Flame, Lock, Music, Pause, Play, Volume2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { VoiceMark } from "@/components/landing/analysis-preview";

const firstRecordingWave = Array.from({ length: 64 }, (_, i) => 4 + Math.abs(Math.sin(i * 0.31) * Math.cos(i * 0.13)) * 26 + Math.abs(Math.sin(i * 2.3)) * 10).map(v => Math.round(v * 4) / 4);

const week = [
  { day: "M", state: "done" },
  { day: "T", state: "done" },
  { day: "W", state: "done" },
  { day: "T", state: "done" },
  { day: "F", state: "today" },
  { day: "S", state: "" },
  { day: "S", state: "" },
];

const roadmap = [
  { icon: Pause, name: "Pausing", status: "In progress — this week", active: true },
  { icon: Music, name: "Rhythm", status: "Up next", active: false },
  { icon: Volume2, name: "Volume", status: "Locked", active: false },
];

export default function DashboardPage() {
  return <div className="dashboard-page">
    <header className="site-header">
      <div className="dash-nav page-width">
        <Link to="/" className="brand" aria-label="Cadence home"><VoiceMark /><span>cadence<span className="brand-period">.</span></span></Link>
        <div className="nav-actions"><Button variant="ghost" className="sign-in" asChild><Link to="/">Home</Link></Button></div>
      </div>
    </header>
    <main className="dash-main page-width">
      <div className="dash-greeting">
        <div className="eyebrow">FRIDAY · OCTOBER 9</div>
        <h1>Good to see you. <span>Ready to speak?</span></h1>
        <p>A little practice every day beats a big session once a month.</p>
      </div>
      <div className="dash-top">
        <section className="streak-card" aria-label="Your streak">
          <span className="streak-flame"><Flame size={22} /></span>
          <div>
            <div className="streak-count">5<small>day streak</small></div>
            <p className="streak-sub">You've shown up every day this week.</p>
          </div>
          <div className="streak-week" aria-hidden="true">
            {week.map(({ day, state }, i) => <span key={i} className={`streak-day ${state}`}>{day}<i /></span>)}
          </div>
        </section>
        <Button variant="speaking" size="cta" className="training-cta">Go to today's training <ArrowRight /></Button>
      </div>
      <div className="dash-grid">
        <section className="dash-card recording-card" aria-label="Your first recording">
          <div className="recording-head"><div className="eyebrow">WHERE IT ALL STARTED</div><span className="recording-meta">DAY 1 · 00:47</span></div>
          <h2 className="recording-title">Your very first recording</h2>
          <div className="recording-wave">
            <button type="button" className="play-button" aria-label="Play your first recording (not available in the preview)"><Play size={15} /></button>
            <svg viewBox="0 0 448 48" preserveAspectRatio="none" role="img" aria-label="Waveform of your first recording">
              <line x1="0" x2="448" y1="24" y2="24" className="wave-baseline" />
              {firstRecordingWave.map((height, i) => <line key={i} x1={i * 7 + 2} x2={i * 7 + 2} y1={24 - height / 2} y2={24 + height / 2} className="firstrec-bar" />)}
            </svg>
          </div>
          <p className="recording-caption">A little shaky, a little fast — and exactly the right place to start. Look at you now.</p>
        </section>
        <section className="dash-card grade-card" aria-label="Your current grade">
          <div className="eyebrow">CURRENT GRADE</div>
          <p className="grade-name">A long way to go</p>
          <p className="grade-sub">Every speaker starts right here. The good news: it only goes up from here.</p>
          <div className="grade-progress" aria-hidden="true"><i /></div>
          <span className="grade-progress-label">22% to your next grade</span>
        </section>
        <section className="dash-card focus-card" aria-label="What we're focusing on right now">
          <span className="focus-icon"><Pause size={22} /></span>
          <div>
            <div className="eyebrow">RIGHT NOW WE'RE WORKING ON</div>
            <h2 className="focus-title">Pausing in speaking</h2>
            <p className="focus-sub">Silence isn't empty — it's where your point lands.</p>
          </div>
        </section>
      </div>
      <section className="dash-card roadmap-card" aria-labelledby="roadmap-title">
        <div className="eyebrow">YOUR SKILL ROADMAP</div>
        <h2 id="roadmap-title">The road ahead</h2>
        <div className="roadmap-track">
          {roadmap.map(({ icon: Icon, name, status, active }) => <div key={name} className={`roadmap-step${active ? " active" : ""}`}>
            <span className="roadmap-node"><Icon size={17} /></span>
            <div><h3>{name}</h3><p className="roadmap-status">{status}</p></div>
          </div>)}
        </div>
      </section>
    </main>
  </div>;
}
