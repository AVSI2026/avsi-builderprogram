import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  UserCheck, 
  Wifi, 
  Music, 
  Video, 
  Lock, 
  Sun, 
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Award
} from 'lucide-react';
import { QRCode } from 'react-qrcode-logo';

const App = () => {
  // Using local image from public folder
  const logoUrl = "/AVSI LOGO FINAL.png";
  
  // Fallback for missing image
  const localFallback = "/AVSI LOGO FINAL.png";

  const tiers = [
    {
      name: "Connected Home",
      label: "GOOD",
      price: "$8,500 - $12,500",
      description: "The essential foundation. Focuses on a 'bulletproof' network and core security infrastructure.",
      features: [
        "UniFi Dream Machine Pro & Managed PoE Switching",
        "2-3 Enterprise WiFi 7 Access Points (High-Density)",
        "4x 4K AI Cameras (Doorbell, Exterior, NVR Storage)",
        "30-Day Secure Local Video Retention (No Subscriptions)",
        "Full Cat6A Structured Wiring (10Gbps Ready)"
      ],
      benefit: "Eliminates the #1 buyer complaint: bad WiFi. Standardizes tech for every listing."
    },
    {
      name: "Smart Home",
      label: "BETTER",
      price: "$22,000 - $32,000",
      isPopular: true,
      description: "The 'Sweet Spot.' Adds high-fidelity distributed audio and a professional control layer.",
      features: [
        "Everything in 'Connected Home' plus:",
        "4-6 Zones of BluOS Multi-Room Audio",
        "NAD Architectural Amplification (Audiophile Grade)",
        "RTI Control Processor & Custom Smart Remote",
        "Integrated Smart Lighting & Climate Scenes",
        "Advanced AI Detection (Expanded 6-8 Camera Array)"
      ],
      benefit: "A high-margin design center upgrade. Buyers feel the home is 'alive' during walkthroughs."
    },
    {
      name: "Luxury Living",
      label: "BEST",
      price: "$45,000 - $85,000+",
      description: "The uncompromising experience. Positions your homes in the highest luxury tier in Utah.",
      features: [
        "Everything in 'Smart Home' plus:",
        "Dedicated Dolby Atmos Cinema (7.2.4 Configuration)",
        "4K Laser Projection & High-Gain Acoustic Screen",
        "Motorized Shading (Lutron/Automated) - Primary Areas",
        "RTI 8\" In-Wall Touchpanels in Primary Suites",
        "8-12 Audio Zones with Architectural Subwoofers",
        "Full Secure Access Control & Biometric Integration"
      ],
      benefit: "The 'Wow Factor.' Makes competing builders look like they're building in 2015."
    }
  ];

  const workflow = [
    { phase: "Pre-Construction", task: "Plan review, system design, and customized bid alignment.", req: "Architectural plans", pay: "70% Deposit", status: "Due at Contract" },
    { phase: "Rough-In", task: "Installation of all low-voltage cabling and rack infrastructure.", req: "Drywall schedule", pay: "Scheduled", status: "Included in Scope" },
    { phase: "Trim & Install", task: "Device mounting, rack termination, and hardware testing.", req: "Site access & power", pay: "25% Milestone", status: "At Trim Start" },
    { phase: "Handoff", task: "System programming, calibration, and buyer training.", req: "Buyer walkthrough", pay: "5% Final", status: "At Completion" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Header / Hero Section */}
      <header className="relative py-16 px-6 border-b border-white/10 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8 w-64 h-64 md:w-80 md:h-80 bg-black rounded-xl p-4 shadow-2xl border border-[#c5a059]/20 flex items-center justify-center overflow-hidden">
             <img 
               src={logoUrl} 
               alt="AVS&I Logo" 
               className="max-w-full h-auto drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] object-contain"
               onError={(e) => {
                 // Try local fallback if drive link fails
                 if (e.target.src !== localFallback) {
                   e.target.src = localFallback;
                 } else {
                   // Final fallback to styled text
                   e.target.style.display = 'none';
                   const fallback = document.getElementById('text-logo-fallback');
                   if (fallback) fallback.style.display = 'flex';
                 }
               }}
             />
             {/* Styled Text Fallback */}
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
            { 
              icon: <ShieldCheck className="w-8 h-8 text-[#c5a059]" />, 
              title: "Brand Integrity", 
              text: "Every project reflects your brand. We use enterprise-grade hardware that ensures you aren't blamed for consumer-tech failures." 
            },
            { 
              icon: <Zap className="w-8 h-8 text-[#c5a059]" />, 
              title: "Risk Mitigation", 
              text: "We handle 100% of service calls and warranty management. One point of contact for every low-voltage scope." 
            },
            { 
              icon: <Award className="w-8 h-8 text-[#c5a059]" />, 
              title: "Park City Standards", 
              text: "Engineering discipline honed on $65M luxury estates, delivered with professional site conduct in Tooele County." 
            }
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
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-white text-center">Full Scope <span className="text-[#c5a059]">Integration</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Music className="w-5 h-5" />, name: "Whole-Home Audio" },
              { icon: <Video className="w-5 h-5" />, name: "Theater & Media" },
              { icon: <Wifi className="w-5 h-5" />, name: "Enterprise Networks" },
              { icon: <ShieldCheck className="w-5 h-5" />, name: "4K AI Surveillance" },
              { icon: <Sun className="w-5 h-5" />, name: "Motorized Shading" },
              { icon: <Lock className="w-5 h-5" />, name: "Access Control" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:bg-[#222] transition-colors">
                <div className="text-[#c5a059]">{s.icon}</div>
                <span className="font-semibold text-xs uppercase tracking-tighter whitespace-nowrap">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Tiers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-[0.15em] text-white">Technology <span className="text-[#c5a059]">Tiers</span></h2>
          <p className="text-gray-400 text-sm tracking-wide">Market-validated pricing for new construction 3,000–4,500 sq. ft. floor plans.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative flex flex-col bg-[#151515] rounded-3xl p-8 border ${tier.isPopular ? 'border-[#c5a059] shadow-[0_0_40px_rgba(197,160,89,0.08)]' : 'border-white/5'}`}>
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c5a059] text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  Market Standard
                </div>
              )}
              <div className="mb-8">
                <span className="text-[#c5a059] font-black text-xs tracking-[0.3em] uppercase">{tier.label}</span>
                <h3 className="text-2xl font-bold mt-2 text-white">{tier.name}</h3>
                <div className="text-3xl font-bold mt-4 text-white/90">{tier.price}</div>
              </div>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed font-light">{tier.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-300 items-start">
                    <ChevronRight className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] text-[#c5a059] uppercase font-black tracking-[0.2em] mb-2">Builder Advantage</p>
                <p className="text-sm text-gray-400 italic font-light">{tier.benefit}</p>
              </div>
            </div>
          ))}
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
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#c5a059]" /> (801) 698-4163
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#c5a059]" /> justin@avsolutions-integration.com
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#c5a059]" /> avsolutions-integration.com
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Scan to Partner</p>
          <QRCode
            value="https://avsi-builder-program.netlify.app"
            size={180}
            logoImage="/AVSI LOGO FINAL.png"
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
        
        {/* ENHANCED FOOTER NOTE */}
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
