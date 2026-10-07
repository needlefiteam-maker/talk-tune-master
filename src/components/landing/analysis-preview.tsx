import { AudioLines, Check, ChevronRight, Ellipsis, FileText, Sparkles } from "lucide-react";

const waveform = Array.from({ length: 112 }, (_, i) => 5 + Math.abs(Math.sin(i * 0.17) * Math.cos(i * 0.07)) * 48 + Math.abs(Math.sin(i * 1.7)) * 17);
export function VoiceMark({ className = "" }: { className?: string }) {
  return <span className={`voice-mark ${className}`} aria-hidden="true"><i /><i /><i /><i /><i /></span>;
}
export function AnalysisPreview() {
  return <div className="analysis-preview" id="analysis-preview">
    <div className="analysis-chrome"><div className="preview-brand"><VoiceMark /><span>cadence</span></div><span className="preview-breadcrumb">Your sessions <ChevronRight size={12} /> Camera practice</span><span className="sample-badge"><span /> Example session</span></div>
    <div className="analysis-body">
      <header className="analysis-heading"><div><div className="session-eyebrow">MONDAY PRACTICE · 02:34</div><h3>Your speaking analysis</h3></div><span className="analysis-complete"><Check size={12} /> Analysis complete</span></header>
      <div className="analysis-metrics">
        <div className="metric"><span>Speaking pace</span><div><strong>142</strong><small>WPM</small></div><p><span className="metric-dot" /> A comfortable pace</p></div>
        <div className="metric"><span>Filler words</span><div><strong>7</strong><small>words</small></div><p>Small habits, big difference</p></div>
        <div className="metric"><span>Longest pause</span><div><strong>1.8</strong><small>seconds</small></div><p>Room for your ideas to land</p></div>
      </div>
      <div className="waveform-panel"><div className="panel-label"><span><AudioLines size={14} /> Your delivery</span><span className="wave-legend"><i /> Vocal variation</span></div>
        <svg className="speech-waveform" viewBox="0 0 784 84" role="img" aria-label="Example speech waveform with varied volume and a highlighted pause"><line x1="0" x2="784" y1="42" y2="42" className="wave-baseline" /><rect x="390" y="6" width="36" height="72" rx="3" className="pause-region" />{waveform.map((height, i) => <line key={i} x1={i * 7 + 2} x2={i * 7 + 2} y1={42 - height / 2} y2={42 + height / 2} className={i > 55 && i < 61 ? "wave-bar wave-paused" : "wave-bar"} />)}</svg>
        <div className="wave-times"><span>00:00</span><span>00:38</span><span>01:17</span><span>01:55</span><span>02:34</span></div></div>
      <div className="transcript-panel"><div className="panel-label"><span><FileText size={14} /> Transcript</span><Ellipsis size={17} aria-hidden="true" /></div><p><span className="transcript-time">00:12</span>“The thing about creating content is, <mark>um</mark>, you don’t need to have it all figured out. <span className="pause-text">[1.8s pause]</span> You just need to, <mark>like</mark>, start sharing what you know.”</p></div>
      <div className="analysis-insight"><Sparkles size={14} /><p><strong>One thing to try:</strong> Replace a filler word with a breath. A little silence sounds confident.</p></div>
    </div>
    <div className="preview-bottom"><span><span className="privacy-dot" /> Your voice. Your progress.</span><span>Illustrative preview · Static sample data</span></div>
  </div>;
}
