import React from 'react';
import {
  ShieldCheck,
  Zap,
  Wifi,
  Music,
  Video,
  Lock,
  Sun,
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Award,
  Cpu,
  Eye,
  Server,
  Plus,
  Volume2,
  ToggleRight,
  Star,
  Film,
  TreePine,
  CheckCircle2
} from 'lucide-react';
import { QRCode } from 'react-qrcode-logo';

const App = () => {
  const logoUrl = "/images/avsi-logo.png";

  const infraTiers = [
    {
      label: "TIER 00: BASIC",
      name: "Smart-Ready Essential",
      price: "$2.8k - $4.5k",
      elite: false,
      features: [
        { icon: <Zap />, text: "WiFi 7 Central Drop" },
        { icon: <Zap />, text: "Dual Cat6A Primary TV" },
        { icon: <Zap />, text: "14/2 Speaker Pre-wire" },
        { icon: <Zap />, text: "Compact Media Hub" },
      ]
    },
    {
      label: "TIER 0: STANDARD",
      name: "Modern Standard",
      price: "$6.5k - $9.5k",
      elite: false,
      features: [
        { icon: <Zap />, text: "16/4 Shade Bus (High/Master)" },
        { icon: <Zap />, text: "Triple Cat6A to 4x TVs" },
        { icon: <Zap />, text: "6-Pt Perimeter Security" },
        { icon: <Zap />, text: "4-Zone Audio Pre-wire" },
      ]
    },
    {
      label: "TIER 0.5: ELITE",
      name: "Full-House Elite",
      price: "$15k - $25k+",
      elite: true,
      features: [
        { icon: <Zap />, text: "16/4 Bus to Every Window" },
        { icon: <Zap />, text: "8-12+ Zone Audio Pre-wire" },
        { icon: <Zap />, text: "7.2.4 Atmos Cinema Pre-wire" },
        { icon: <Zap />, text: "Dual Master Media Hubs" },
      ]
    }
  ];

  const hardwareTiers = [
    {
      label: "TIER 1: CONNECTED",
      price: "$12.5k - $18.5k",
      elite: false,
      features: [
        { icon: <Cpu />, text: "Dream Machine Max" },
        { icon: <Wifi />, text: "WiFi 7 Enterprise" },
        { icon: <Eye />, text: "4x 4K AI Cameras" },
        { icon: <Server />, text: "12U-24U Rack Build" },
      ]
    },
    {
      label: "TIER 2: SMART HOME",
      price: "$28k - $45k",
      elite: false,
      features: [
        { icon: <Plus />, text: "All Tier 1 Baseline" },
        { icon: <Music />, text: "4-6 Zone BluOS Audio" },
        { icon: <Volume2 />, text: "NAD Power Amps" },
        { icon: <ToggleRight />, text: "RTI Control Processor" },
      ]
    },
    {
      label: "TIER 3: ELITE LUXURY",
      price: "$75k - $150k+",
      elite: true,
      features: [
        { icon: <Star />, text: "Everything in Tier 2" },
        { icon: <Film />, text: "7.2.4 Atmos Cinema" },
        { icon: <Sun />, text: "Full Lutron Shading" },
        { icon: <TreePine />, text: "Landscape Audio Hub" },
      ]
    }
  ];

  const comparisonRows = [
    { detail: "WiFi Ceiling Access Points", t00: "1x High-Output",   t0: "3x Managed",        t05: "Whole-Home + Exterior" },
    { detail: "16/4 Shading Bus",           t00: "No",               t0: "High/Master Only",  t05: "Every Window",         highlight: true },
    { detail: "Audio Zone Pre-wire",        t00: "2 Zones (14/2)",   t0: "4 Zones (14/2)",    t05: "8-12+ Zones (14/2)" },
    { detail: "4K Surveillance Points",     t00: "2 Points",         t0: "6 Points",          t05: "Full Perimeter" },
    { detail: 'Media Enclosure Hub',        t00: '20" Compact',      t0: '30" - 42" Recessed',t05: "Dual Master Units" },
    { detail: "TARGET RANGE (INC. TRIM)",   t00: "$2.8K - $4.5K",   t0: "$6.5K - $9.5K",    t05: "$15K - $25K+",         bold: true },
  ];

  const workflow = [
    { phase: "Pre-Construction", task: "Plan review, system design, and customized bid alignment.", req: "Architectural plans", pay: "70% Deposit", status: "Due at Contract" },
    { phase: "Rough-In",         task: "Installation of all low-voltage cabling and rack infrastructure.", req: "Drywall schedule", pay: "Scheduled", status: "Included in Scope" },
    { phase: "Trim & Install",   task: "Device mounting, rack termination, and hardware testing.", req: "Site access & power", pay: "25% Milestone", status: "At Trim Start" },
    { phase: "Handoff",          task: "System programming, calibration, and buyer training.", req: "Buyer walkthrough", pay: "5% Final", status: "At Completion" }
  ];

  const PriceTag = ({ children }) => (
    <span
      className="inline-block text-black px-4 py-1.5 font-black text-[10px] uppercase tracking-wider rounded-sm mb-4 shadow-[0_4px_15px_rgba(197,160,89,0.3)]"
      style={{ background: 'linear-gradient(135deg, #c5a059 0%, #ecd3a5 50%, #c5a059 100%)', fontFamily: 'Poppins, sans-serif' }}
    >
      {children}
    </span>
  );

  const PhaseLabel = ({ children }) => (
    <p className="text-[#c5a059] text-xs font-black uppercase tracking-[0.3em] mb-2">{children}</p>
  );

  const TierTrack = ({ tier, type }) => (
    <div className={`border-l-[3px] border-[#c5a059] pl-5 py-2 ${tier.elite ? 'bg-gradient-to-b from-[#c5a059]/10 to-transparent' : 'bg-gradient-to-b from-[#c5a059]/5 to-transparent'}`}>
      <PriceTag>{tier.label}</PriceTag>
      {type === 'infra' && (
        <>
          <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{tier.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{tier.price}</p>
        </>
      )}
      {type === 'hardware' && (
        <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{tier.price}</h3>
      )}
      <ul className="space-y-2">
        {tier.features.map((f, j) => (
          <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
            <span className="text-[#c5a059] w-3 h-3 mt-0.5 shrink-0 [&>svg]:w-3 [&>svg]:h-3">{f.icon}</span>
            {f.text}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-[#c5a059] selection:text-black">

      {/* Header / Hero */}
      <header className="relative py-16 px-6 border-b border-white/10 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8 w-64 h-64 md:w-80 md:h-80 bg-black rounded-xl p-4 shadow-2xl border border-[#c5a059]/20 flex items-center justify-center overflow-hidden">
            <img
              src={logoUrl}
              alt="AVS&I Logo"
              className="max-w-full h-auto drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.getElementById('text-logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="text-logo-fallback" className="hidden flex-col items-center justify-center">
              <div className="relative">
                <ShieldCheck className="w-20 h-20 text-[#c5a059] opacity-20 absolute -top-4 -left-4" />
                <Award className="w-16 h-16 text-[#c5a059] relative z-10" />
              </div>
              <div className="text-[#c5a059] font-bold text-3xl italic leading-tight uppercase mt-4 tracking-tighter text-center">
                AV SOLUTIONS<br/>& INTEGRATION
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white uppercase leading-tight">
            Builder <span className="text-[#c5a059]">Partnership</span> Program
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl uppercase tracking-[0.2em] font-light">
            Your Single-Source Low-Voltage Partner
          </p>
        </div>
      </header>

      {/* Value Propositions */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-[#c5a059]" />, title: "Brand Integrity",    text: "Every project reflects your brand. We use enterprise-grade hardware that ensures you aren't blamed for consumer-tech failures." },
            { icon: <Zap          className="w-8 h-8 text-[#c5a059]" />, title: "Risk Mitigation",   text: "We handle 100% of service calls and warranty management. One point of contact for every low-voltage scope." },
            { icon: <Award        className="w-8 h-8 text-[#c5a059]" />, title: "Park City Standards", text: "Engineering discipline honed on $65M luxury estates, delivered with professional site conduct in Tooele County." }
          ].map((item, i) => (
            <div key={i} className="bg-[#151515] p-8 rounded-2xl border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300 group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Scope */}
      <section className="py-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-white">Full Scope <span className="text-[#c5a059]">Integration</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Music      className="w-5 h-5" />, name: "Whole-Home Audio" },
              { icon: <Video      className="w-5 h-5" />, name: "Theater & Media" },
              { icon: <Wifi       className="w-5 h-5" />, name: "Enterprise Networks" },
              { icon: <ShieldCheck className="w-5 h-5" />, name: "4K AI Surveillance" },
              { icon: <Sun        className="w-5 h-5" />, name: "Motorized Shading" },
              { icon: <Lock       className="w-5 h-5" />, name: "Access Control" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:bg-[#222] transition-colors">
                <div className="text-[#c5a059]">{s.icon}</div>
                <span className="font-semibold text-xs uppercase tracking-tighter whitespace-nowrap">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 1: INFRASTRUCTURE TRACKS ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <PhaseLabel>Phase 1: Rough-In & Trim</PhaseLabel>
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Infrastructure <span className="text-[#c5a059]">Tracks</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {infraTiers.map((tier, i) => <TierTrack key={i} tier={tier} type="infra" />)}
          </div>
          <div className="text-center bg-[#c5a059]/5 border border-[#c5a059]/20 rounded-lg px-6 py-4">
            <p className="text-sm text-gray-300">
              <span className="text-[#c5a059] font-bold">Turn-Key Infrastructure:</span>{' '}
              All pricing includes raw wire, rough-in labor, and full termination/trim (keystones, faceplates, and certified testing).
            </p>
          </div>
        </div>
      </section>

      {/* ── TIER 0.5 ELITE DEEP DIVE ── */}
      <section className="py-24 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <PhaseLabel>Elite Custom Pre-Wire</PhaseLabel>
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tier 0.5: <span className="text-[#c5a059]">Elite</span> Infrastructure
          </h2>
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <PriceTag>EST: $15,000 - $25,000+</PriceTag>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                The "Park City Standard." Designed for luxury custom builds requiring absolute zero wireless dependency for critical systems.
              </p>
              <ul className="space-y-5">
                {[
                  { title: "Full-House Shading:",  desc: "16/4 Bus to EVERY window location." },
                  { title: "Whole-Home Audio:",    desc: "14/2 Pre-wire for 8-12 unique zones." },
                  { title: "Atmos Cinema:",        desc: "Full 7.2.4 Theater Array pre-wire." },
                  { title: "Complete Trim:",       desc: "Multiple master enclosures & 100+ terminations." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-[#c5a059] font-bold">{item.title}</span> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#141414] border border-[#c5a059]/30 rounded-lg p-8 shadow-xl">
              <h3 className="text-[#c5a059] text-xl font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>The Gold Standard</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Wireless is for convenience; Copper is for commitment. By pre-wiring every window with 16/4 communication bus, you eliminate 100% of future battery maintenance for your homeowner.
              </p>
              <div className="mt-6 pt-5 border-t border-[#c5a059]/20">
                <p className="text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-2">Trim Level:</p>
                <p className="text-gray-300 text-sm">Includes all Shielded Cat6A blocks, faceplates, and signal certification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE 2: ACTIVE SYSTEM HARDWARE ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <PhaseLabel>Phase 2: Active Systems</PhaseLabel>
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Active <span className="text-[#c5a059]">System</span> Hardware
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {hardwareTiers.map((tier, i) => <TierTrack key={i} tier={tier} type="hardware" />)}
          </div>
          <div className="text-center bg-[#c5a059]/5 border border-[#c5a059]/20 rounded-lg px-6 py-4">
            <p className="text-sm text-gray-300">
              <span className="text-[#c5a059] font-bold">The Signature Build:</span>{' '}
              T3 includes our 42U Signature Laced Rack. All systems are lab-built off-site for zero-delay closing handoffs.
            </p>
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE COMPARISON TABLE ── */}
      <section className="py-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <PhaseLabel>Infrastructure Comparison</PhaseLabel>
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Infrastructure <span className="text-[#c5a059]">Tier</span> Comparison
          </h2>
          <div className="overflow-x-auto">
            <div className="bg-[#141414] rounded-2xl border border-white/5 overflow-hidden shadow-2xl min-w-[600px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111] border-b-2 border-[#c5a059]">
                    {["Detail Component", "TIER 00: BASIC", "TIER 0: STANDARD", "TIER 0.5: ELITE"].map(h => (
                      <th key={h} className="py-4 px-6 text-[#c5a059] text-[10px] font-black uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c5a059]/10">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className={`py-3 px-6 text-sm ${row.bold ? 'font-bold text-white uppercase tracking-wide' : 'text-gray-300'}`}>{row.detail}</td>
                      <td className={`py-3 px-6 text-sm ${row.bold ? 'font-bold text-white' : 'text-gray-400'}`}>{row.t00}</td>
                      <td className={`py-3 px-6 text-sm ${row.bold ? 'font-bold text-white' : 'text-gray-400'}`}>{row.t0}</td>
                      <td className={`py-3 px-6 text-sm ${row.highlight ? 'text-[#c5a059] font-bold' : row.bold ? 'font-bold text-white' : 'text-gray-400'}`}>{row.t05}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-white">Single-Source <span className="text-[#c5a059]">Workflow</span></h2>
          <div className="bg-[#151515] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left table-fixed">
              <thead>
                <tr className="border-b border-white/10 bg-[#1a1a1a]">
                  <th className="w-1/4 py-5 px-6 text-[#c5a059] font-black uppercase text-[10px] tracking-widest">Phase</th>
                  <th className="w-1/2 py-5 px-6 text-gray-400 font-black uppercase text-[10px] tracking-widest">Tasks & Milestones</th>
                  <th className="w-1/4 py-5 px-6 text-gray-400 font-black uppercase text-[10px] tracking-widest text-right">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {workflow.map((w, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-7 px-6 align-top">
                      <div className="font-bold text-white text-sm uppercase tracking-wide">{w.phase}</div>
                    </td>
                    <td className="py-7 px-6 align-top">
                      <div className="text-gray-200 text-sm font-medium mb-1 leading-relaxed">{w.task}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Requirement: {w.req}</div>
                    </td>
                    <td className="py-7 px-6 text-right align-top">
                      <div className="flex flex-col items-end">
                        <span className={`text-sm font-bold px-3 py-1 rounded-md mb-1 ${w.pay.includes('%') ? 'bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20' : 'bg-white/5 text-gray-500 border border-white/10'}`}>
                          {w.pay}
                        </span>
                        <div className="text-[9px] uppercase tracking-tighter text-gray-500 font-bold whitespace-nowrap">
                          {w.status}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-24 px-6 bg-gradient-to-t from-[#000] to-[#0a0a0a] border-t border-white/5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter text-white">Ready to <span className="text-[#c5a059]">Partner?</span></h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We will review your current plans at no cost and demonstrate exactly how a smart home tier integrates into your floor plans.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-xs font-mono tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#c5a059]" /> (801) 698-4163</div>
          <div className="flex items-center gap-3"><Mail  className="w-4 h-4 text-[#c5a059]" /> justin@avsolutions-integration.com</div>
          <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-[#c5a059]" /> avsolutions-integration.com</div>
        </div>

        <div className="mt-12">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Scan to Partner</p>
          <QRCode
            value="https://avsi-builderprogram.netlify.app"
            size={180}
            logoImage="/images/avsi-logo.png"
            logoWidth={60}
            logoHeight={60}
            logoOpacity={0.9}
            qrStyle="squares"
            eyeRadius={10}
            fgColor="#c5a059"
            bgColor="#000000"
            eyeColor="#c5a059"
          />
        </div>

        <div className="mt-24 pt-10 border-t border-[#c5a059]/30">
          <div className="inline-block px-8 py-3 bg-[#c5a059]/5 rounded-lg border border-[#c5a059]/10">
            <p className="text-xs md:text-sm text-[#c5a059] font-bold uppercase tracking-[0.25em] leading-relaxed">
              AV Solutions & Integration | Tooele, UT | Confidential Builder Document
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
