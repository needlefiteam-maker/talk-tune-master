import React from 'react';
import { Mic, BarChart3, Clock, Type, Play, Volume2 } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#05070a] text-[#f8f9fa] font-sans selection:bg-[#bef264] selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter italic">ELOQUENCE</div>
        <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
          <a href="#" className="hover:text-[#bef264] transition-colors">Method</a>
          <a href="#" className="hover:text-[#bef264] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#bef264] transition-colors">About</a>
        </div>
        <button className="bg-[#f8f9fa] text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-[#bef264] transition-all duration-300">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-3xl mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            MASTER THE ART <br />
            <span className="text-[#bef264]">OF SPEAKING.</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-60 max-w-xl leading-relaxed">
            Real-time vocal analysis for the modern professional. Eliminate fillers, optimize your pace, and speak with absolute clarity.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-[#bef264] text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
              Start Training Now
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/5 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Analysis UI Mockup */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#bef264]/20 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0d1117] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Analysis Header */}
            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#bef264] rounded-full flex items-center justify-center text-black">
                  <Mic size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Session Analysis</h3>
                  <p className="text-xs opacity-50 uppercase tracking-widest">Recorded Today • 04:20 PM</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/5 flex flex-col items-center min-w-[100px]">
                  <span className="text-2xl font-black text-[#bef264]">142</span>
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-wider">WPM</span>
                </div>
                <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/5 flex flex-col items-center min-w-[100px]">
                  <span className="text-2xl font-black text-[#bef264]">7</span>
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-wider">Fillers</span>
                </div>
                <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/5 flex flex-col items-center min-w-[100px]">
                  <span className="text-2xl font-black text-[#bef264]">1.8s</span>
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-wider">Avg Pause</span>
                </div>
              </div>
            </div>

            {/* Waveform Visualization */}
            <div className="p-8 h-48 flex items-center gap-1 justify-between opacity-80">
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-[#bef264]/30 rounded-full transition-all duration-500 hover:bg-[#bef264]"
                  style={{ 
                    height: `${Math.max(10, Math.sin(i * 0.2) * 80 + 20)}%`,
                    opacity: i > 25 && i < 35 ? 0.3 : 1
                  }}
                />
              ))}
            </div>

            {/* Transcript & Controls */}
            <div className="p-8 bg-black/40 border-t border-white/5 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                  <Type size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">Transcript</span>
                </div>
                <p className="text-lg leading-relaxed opacity-90 italic">
                  "So, basically... <span className="bg-red-500/20 text-red-300 px-1 rounded">um</span>, I think we should focus on the, <span className="bg-red-500/20 text-red-300 px-1 rounded">like</span>, core value proposition before we pivot to the, <span className="bg-red-500/20 text-red-300 px-1 rounded">uh</span>, secondary markets."
                </p>
              </div>
              <div className="flex flex-col justify-end items-end gap-6">
                 <div className="flex gap-4 items-center w-full bg-white/5 p-4 rounded-xl border border-white/5">
                    <button className="w-10 h-10 bg-[#bef264] rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                      <Play size={18} fill="currentColor" />
                    </button>
                    <div className="flex-1 h-1 bg-white/10 rounded-full relative">
                      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#bef264] rounded-full"></div>
                    </div>
                    <Volume2 size={16} className="opacity-50" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-white/5 text-center">
        <p className="opacity-40 text-sm">© 2024 Eloquence Training. Master the art of speaking.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
