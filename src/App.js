import React, { useEffect, useState } from "react";
import BackgroundVideo from "./BackgroundVideo";

// Fairdeal Truck Parts - "Coming Soon" React component
// Tailwind CSS required in the project for styling to work as intended.
// Usage: Drop <ComingSoon /> into any React app (CRA / Vite / Next) after installing Tailwind.

export default function ComingSoon() {
  // Set a launch date (example: 30 days from now) — change as needed
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = launchDate.getTime() - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
  //   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05030F] via-[#1F0B56] to-[#4C0F74] text-white px-6">
  //     <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  //       {/* Left: Illustration */}
  //       <div className="relative flex items-center justify-center p-6">
  //         {/* 3D-ish glossy sphere made with layered divs and blend modes to emulate the Dribbble art */}
  //         <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden">
  //           <div className="absolute inset-0 rounded-full transform scale-105 filter blur-3xl opacity-30"
  //                style={{ background: 'radial-gradient(circle at 20% 20%, rgba(223,158,224,0.4), transparent 20%), radial-gradient(circle at 80% 60%, rgba(160,58,179,0.35), transparent 25%)' }} />

  //           <svg viewBox="0 0 400 400" className="w-full h-full">
  //             <defs>
  //               <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
  //                 <stop offset="0%" stopColor="#DF9EE0" stopOpacity="1" />
  //                 <stop offset="50%" stopColor="#A03AB3" stopOpacity="1" />
  //                 <stop offset="100%" stopColor="#5D4A9D" stopOpacity="1" />
  //               </linearGradient>
  //               <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
  //                 <feGaussianBlur stdDeviation="8" result="b" />
  //                 <feBlend in="SourceGraphic" in2="b" />
  //               </filter>
  //             </defs>

  //             <g filter="url(#f1)">
  //               <path d="M200,30 C270,30 350,80 360,160 C370,240 310,320 230,350 C150,380 80,340 50,270 C20,200 80,80 200,30 Z"
  //                     fill="url(#g1)" />
  //             </g>

  //             {/* subtle glossy strokes */}
  //             <path d="M80 140 C130 100 200 90 260 130" stroke="rgba(255,255,255,0.06)" strokeWidth="18" strokeLinecap="round" fill="none" />
  //             <path d="M120 200 C170 170 230 160 300 200" stroke="rgba(255,255,255,0.05)" strokeWidth="28" strokeLinecap="round" fill="none" />

  //             {/* small floating dots */}
  //             <circle cx="320" cy="90" r="6" fill="#fff" opacity="0.08" />
  //             <circle cx="60" cy="70" r="8" fill="#fff" opacity="0.05" />
  //           </svg>

  //           {/* subtle highlight overlay */}
  //           <div className="absolute left-6 top-8 w-32 h-20 rounded-lg transform rotate-6 opacity-30"
  //                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))' }} />

  //           {/* shadow ring */}
  //           <div className="absolute -bottom-6 left-1/4 w-40 h-6 rounded-full filter blur-xl opacity-40" style={{ background: 'rgba(0,0,0,0.6)' }} />
  //         </div>
  //       </div>

  //       {/* Right: Content */}
  //       <div className="p-6 flex flex-col justify-center">
  //         <div className="mb-4">
  //           <span className="uppercase text-sm tracking-widest text-gray-300">Coming Soon</span>
  //           <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Fairdeal Truck Parts</h1>
  //           <p className="mt-3 text-gray-200 max-w-xl">Heavy‑duty truck spare parts, components &amp; accessories. We're building something big for fleet owners and mechanics — stay tuned.</p>
  //         </div>

  //         {/* Countdown */}
  //         <div className="mt-6">
  //           {timeLeft ? (
  //             <div className="flex gap-4 items-center">
  //               {['days', 'hours', 'minutes', 'seconds'].map((k) => (
  //                 <div key={k} className="bg-white/6 backdrop-blur-sm border border-white/6 px-4 py-3 rounded-lg text-center min-w-[72px]">
  //                   <div className="text-2xl font-semibold">{timeLeft[k]}</div>
  //                   <div className="text-xs uppercase text-gray-300 mt-1">{k}</div>
  //                 </div>
  //               ))}
  //             </div>
  //           ) : (
  //             <div className="text-xl font-medium">We're live!</div>
  //           )}
  //         </div>

  //         {/* Email capture & contact */}
  //         <form className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3" onSubmit={(e) => e.preventDefault()}>
  //           <input aria-label="email" type="email" placeholder="Enter your email for launch updates"
  //                  className="flex-1 bg-white/6 border border-white/6 rounded-lg px-4 py-3 placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-indigo-400" />
  //           <button className="bg-[#A03AB3] hover:bg-[#8a2d99] px-5 py-3 rounded-lg font-semibold">Notify Me</button>
  //         </form>

  //         <div className="mt-6 text-sm text-gray-300">
  //           <div>📞 <a href="tel:+1-XXX-XXX-XXXX" className="text-gray-100 underline">+1 (XXX) XXX-XXXX</a></div>
  //           <div>📧 <a href="mailto:info@fairdealtruckparts.ca" className="text-gray-100 underline">info@fairdealtruckparts.ca</a></div>
  //           <div className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Fairdeal Truck Parts</div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* small decorative corner blobs */}
  //     <div className="pointer-events-none absolute left-6 bottom-6 w-16 h-16 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(223,158,224,0.5), transparent 40%)' }} />
  //     <div className="pointer-events-none absolute right-6 top-6 w-20 h-20 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(80,60,140,0.45), transparent 40%)' }} />
  //   </div>
  // );
  <>
  <BackgroundVideo />;
  </>
  )
}
