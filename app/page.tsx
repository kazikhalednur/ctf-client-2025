"use client"

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Banner from "@/assets/images/CYBER_DATE_ANN3.jpg";
import Axentec from "@/assets/sponsers/axentec.png";
import CreativeIT from "@/assets/sponsers/creativeitinstitute.jpeg";
import DarkEye from "@/assets/sponsers/darkeye.png";
import NRBBank from "@/assets/sponsers/NRB_Bank.png";
import PrimeNet from "@/assets/sponsers/primenet-white.png";
import ZoomEye from "@/assets/sponsers/zoomeye.jpg";
import JabedImage from "@/assets/speakers/jabed_morshed_chowdhury.jpg";
import SamiulImage from "@/assets/speakers/samiul_islam.jpg";
import ShaheeImage from "@/assets/speakers/shahee_mirza.jpg";

export default function Home() {
  function useCountdown(targetDateISO: string) {
    const targetTs = useMemo(() => new Date(targetDateISO).getTime(), [targetDateISO]);
    const [now, setNow] = useState<number>(() => Date.now());

    useEffect(() => {
      const id = setInterval(() => setNow(Date.now()), 1000);
      return () => clearInterval(id);
    }, []);

    const total = Math.max(0, targetTs - now);
    const seconds = Math.floor(total / 1000) % 60;
    const minutes = Math.floor(total / (1000 * 60)) % 60;
    const hours = Math.floor(total / (1000 * 60 * 60)) % 24;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds, done: total === 0 };
  }

  function Countdown() {
    // Set your event start time here (local time). Example: Nov 16, 2025 09:00.
    const { days, hours, minutes, seconds, done } = useCountdown("2025-10-18T11:59:00");
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    return (
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
        <div className="text-center">
          <div className="text-white/80 font-medium text-3xl pb-2">National CTF Competition 2025</div>
          <div className="text-white/80 font-medium text-xl">The Online Qualifier Starts in</div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3 text-center">
          {[{ k: "Days", v: days }, { k: "Hours", v: hours }, { k: "Minutes", v: minutes }, { k: "Seconds", v: seconds }].map((i) => (
            <div key={i.k} className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-3xl md:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                {mounted ? String(i.v).padStart(2, "0") : "00"}
              </div>
              <div className="text-[11px] md:text-xs text-white/60 mt-1 uppercase tracking-wide">{i.k}</div>
            </div>
          ))}
        </div>
        {mounted && done && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-black px-3 py-1 text-xs font-semibold">
            The registration has started!
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="font-sans min-h-screen bg-[#3b065e] text-white relative">
      {/* Background tint overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/0 via-white/0 to-white/0" />
      <header className="border-b border-white/10 backdrop-blur sticky top-0 z-20 bg-gradient-to-b from-[#3b065e]/70 to-transparent">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/diu_cybercon.png" alt="CTF" width={64} height={64} className="rounded" />
            <span className="text-xl font-medium tracking-wide text-white/90">DIU CYBERCON</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">ABOUT</a>
            <a href="/speakers" className="hover:text-white">SPEAKERS</a>
            {/* <a href="#tracks" className="hover:text-white">Tracks</a> */}
            <a href="#timeline" className="hover:text-white">EVENTS</a>
            <a href="#prizes" className="hover:text-white">PRIZES</a>
            {/* <a href="#location" className="hover:text-white">Location</a> */}
            <a href="#organizers" className="hover:text-white">ORGANIZERS</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="https://forms.gle/N1hmSEeUNncPUVvS7" target="_blank" className="px-3 py-1.5 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400">REGISTER</a>
          </nav>
        </div>
        {/* Mobile nav */}
        <div className="sm:hidden border-t border-white/10">
          <nav className="max-w-screen-2xl mx-auto px-3 py-3 flex items-center gap-3 overflow-x-auto text-xs text-white/70 [scrollbar-width:none] [-ms-overflow-style:none]">
            <style jsx>{`
              nav::-webkit-scrollbar{display:none}
            `}</style>
            <a href="#about" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">ABOUT</a>
            {/* <a href="#tracks" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">Tracks</a> */}
            <a href="#speakers" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">SPEAKERS</a>
            <a href="#timeline" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">EVENTS</a>
            <a href="#prizes" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">PRIZES</a>
            {/* <a href="#location" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">Location</a> */}
            <a href="#organizers" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">ORGANIZERS</a>
            <a href="#faq" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">FAQ</a>
            <a href="https://forms.gle/N1hmSEeUNncPUVvS7" target="_blank" className="shrink-0 px-3 py-1.5 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 border border-emerald-400/30">REGISTER</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[100vh] w-[120vw] rounded-[100%] bg-emerald-500/10 blur-3xl" />
          </div>
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 pt-8 pb-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Welcome to National CTF Competition 2025!
                </h1>
                <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
                  Organized by the Cyber Security Club, Department of Computer Science & Engineering, Daffodil International University, this national-level Capture the Flag (CTF) contest is designed to bring together the brightest minds in cybersecurity
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="https://forms.gle/N1hmSEeUNncPUVvS7" target="_blank" className="px-5 py-2.5 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400">Register Now</a>
                  <a href="#rules" className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white">Rules</a>
                </div>
                <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-2">
                    <a href="#location">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-400">
                          <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                      </span>
                    </a>
                    <a href="#location" className="whitespace-nowrap">Daffodil International University</a>
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
                  <Image
                    src={Banner}
                    alt="National CTF Competition Banner"
                    width={1200}
                    height={700}
                    className="h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="max-w-screen-2xl mx-auto px-3 sm:px-5 pt-4 pb-8">
          <Countdown />
        </section>

        {/* About */}
        <section id="about" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-white/70 leading-relaxed">
                The Cyber Security Club (CSC), under the Department of Computer Science & Engineering at Daffodil International University, proudly organizes the National Capture the Flag (CTF) Competition 2025. This premier event brings together some of the brightest minds in cybersecurity, providing a platform to showcase technical expertise, problem-solving skills, and innovative approaches to real-world challenges.
              </p>
              <p className="text-white/70 leading-relaxed">
                As a leading student organization at DIU, CSC is dedicated to advancing cybersecurity knowledge, developing practical skills, and raising awareness about emerging digital threats. Through workshops, training programs, awareness campaigns, and national-level competitions, CSC strives to inspire innovation, foster collaboration, and strengthen the cybersecurity community across Bangladesh.
              </p>
            </div>
            <div><div className="rounded-xl border border-white/10 p-6 bg-transparent">
              <ul className="text-white/80 text-sm space-y-2">
                <li>• 2 rounds: online qualifier and on-site finals at DIU</li>
                <li>• Team size up to 4, beginner friendly warmups included</li>
                <li>• Dynamic scoring and live scoreboard</li>
                <li>• Prizes and certificates for top teams</li>
              </ul>
            </div></div>
          </div>
        </section>



        {/* Tracks */}
        <section id="tracks" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Tracks</h2>
          <p className="mt-2 text-white/60">Participants will solve challenges in these domains.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Web Exploitation",
                desc: "Discover and weaponize vulnerabilities in web apps: XSS, SSRF, auth flaws, deserialization, and more.",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-emerald-400">
                    <path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6l-4 4v-4H5a2 2 0 0 1-2-2V5zm3 2h12v2H6V7zm0 4h8v2H6v-2z" />
                  </svg>
                ),
              },
              {
                title: "Digital Forensics",
                desc: "Analyze artifacts: PCAPs, disk and memory images, logs, and traces to reconstruct incidents.",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-emerald-400">
                    <path fill="currentColor" d="M10 2a8 8 0 1 1 5.29 13.88l3.41 3.41-1.41 1.41-3.41-3.41A8 8 0 0 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
                  </svg>
                ),
              },
              {
                title: "Cryptography",
                desc: "Break classic and modern schemes, misuse of primitives, padding oracles, and side channels.",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-emerald-400">
                    <path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm-3 8V6a3 3 0 1 1 6 0v3H9z" />
                  </svg>
                ),
              },
              {
                title: "OSINT",
                desc: "Open-source intelligence gathering across public data, social footprints, and metadata sleuthing.",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-emerald-400">
                    <path fill="currentColor" d="M12 2a10 10 0 1 0 6.32 17.84l3.27.82-1.06-3.17A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 7.75 10.02l.28.84.88.22-.2-.6A10 10 0 1 0 12 4z" />
                  </svg>
                ),
              },
              {
                title: "Reverse Engineering",
                desc: "Disassemble, analyze, and patch binaries; understand control flow, obfuscation, and packers.",
                icon: (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-emerald-400">
                    <path fill="currentColor" d="M12 2 4 6v6c0 5 3.8 9.7 8 10 4.2-.3 8-5 8-10V6l-8-4zm0 2.2L18 7v5c0 3.8-2.8 7.7-6 8-3.2-.3-6-4.2-6-8V7l6-2.8zM8 11h8v2H8v-2z" />
                  </svg>
                ),
              },
            ].map((t) => (
              <div key={t.title} className="rounded-xl border border-white/10 bg-transparent p-5 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                    {t.icon}
                  </div>
                  <div className="text-emerald-400 text-sm font-medium">{t.title}</div>
                </div>
                <div className="mt-2 text-white/70 text-sm leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Speakers */}
        <section id="speakers" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Speakers</h2>
          <p className="mt-2 text-white/60">Meet our expert speakers for National CTF Competition 2025.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Jabed Morshed Chowdhury",
                title: "Senior Lecturer at La Trobe University, Melbourne, Australia",
                expertise: "Digital Forensics",
                linkedin: "https://www.linkedin.com/in/jabedmchowdhury/",
                image: JabedImage
              },
              {
                name: "Samiul Islam",
                title: "L2 SOC Analyst | Technical trainer FIRST community",
                expertise: "Blue Team",
                linkedin: "https://www.linkedin.com/in/samiul008/",
                image: SamiulImage
              },
              {
                name: "Shahee Mirza",
                title: "Cybersecurity Entrepreneur & CISO",
                expertise: "Red Team",
                linkedin: "https://www.linkedin.com/in/shaheemirza/",
                image: ShaheeImage
              }
            ].map((speaker) => (
              <div key={speaker.name} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover border-2 border-emerald-400/30"
                    />
                    <div className="absolute -bottom-1 -right-1 px-2 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold">
                      {speaker.expertise.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{speaker.name}</h3>
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">{speaker.title}</p>
                  <div className="mt-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-medium">
                    {speaker.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/speakers" className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white">
              View All Speakers
            </a>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Timeline</h2>
          <p className="mt-2 text-white/60">Key milestones and event-day schedule.</p>
          <div className="mt-8 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <ol className="space-y-6">
              {[
                {
                  date: "OCT 15",
                  time: "11:59 PM",
                  title: "Registration closes",
                  desc: "Teams can register online.",
                },
                {
                  date: "OCT 18",
                  time: "12:00 PM - 08:00 PM",
                  title: "Online Qualifier",
                  desc: "All teams can participate in online qualifier.",
                },
                {
                  date: "OCT 25",
                  time: "6 - 10 Hours(TBA)",
                  title: "On-site",
                  desc: "Top 30 teams are qualify for on-site finals.",
                },
                // {
                //   date: "Nov 16",
                //   time: "09:00",
                //   title: "Finals Start",
                //   desc: "36-hour CTF begins. Tracks open gradually with dynamic scoring.",
                // },
                // {
                //   date: "Nov 17",
                //   time: "21:00",
                //   title: "Finals End",
                //   desc: "Challenge submissions close. Scoreboard locks.",
                // },
                // {
                //   date: "Nov 17",
                //   time: "21:30",
                //   title: "Awards & Closing",
                //   desc: "Winners announced; certificates and prizes distributed.",
                // },
              ].map((e) => (
                <li key={e.title} className="relative pl-12">
                  <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
                  <div className="text-white/60 text-xs">
                    <span className="font-mono">{e.date}</span>
                    <span className="mx-2">•</span>
                    <span className="font-mono">{e.time}</span>
                  </div>
                  <div className="mt-1 text-white font-medium">{e.title}</div>
                  <div className="text-white/70 text-sm mt-1 leading-relaxed">{e.desc}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Prizes */}
        <section id="prizes" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Prizes</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { place: "Champion", amount: 50000, perks: ["Certificates", "Swag Kit"] },
              { place: "1st Runner-up", amount: 30000, perks: ["Certificates", "Swag Kit"] },
              { place: "2nd Runner-up", amount: 20000, perks: ["Certificates", "Swag Kit"] },
            ].map((p) => (
              <div key={p.place} className="rounded-xl border border-yellow-400/20 bg-transparent p-6">
                <div className="text-yellow-300 text-sm">{p.place}</div>
                <div className="text-2xl font-bold mt-1">৳{p.amount.toLocaleString("en-BD")}</div>
                <div className="text-white/70 text-sm mt-2">Includes: {p.perks.join(", ")}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Sponsors</h2>
          <p className="mt-2 text-white/60">Thanks to our partners for supporting National CTF Competition 2025.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { src: "/diu.png", alt: "DIU" },
              { src: Axentec, alt: "Axentec" },
              { src: CreativeIT, alt: "Creative IT Institute" },
              { src: DarkEye, alt: "DarkEye" },
              { src: NRBBank, alt: "NRB Bank" },
              { src: PrimeNet, alt: "PrimeNet" },
              { src: ZoomEye, alt: "ZoomEye" }
            ].map((sponsor) => (
              <div key={sponsor.alt} className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center justify-center h-40 hover:border-white/20 transition-colors">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={140}
                  height={40}
                  className="max-w-full max-h-full object-contain opacity-90 contrast-125 invert-0"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-white/60">Want to sponsor? <a href="mailto:csclub@diu.edu.bd" className="underline decoration-white/30 hover:text-white">Get in touch</a>.</div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10">
            {[
              {
                q: "Who Can Join?",
                a: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>University Students</li>
                    <li>Cybersecurity Enthusiasts</li>
                    <li>Professionals eager to sharpen skills</li>
                  </ul>
                ),
              },
              {
                q: "Why Register?",
                a: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gain hands-on cybersecurity experience</li>
                    <li>Compete with the best in the nation</li>
                    <li>Win prizes, recognition, and networking opportunities</li>
                  </ul>
                ),
              },
            ].map((f) => (
              <details key={f.q} className="group">
                <summary className="cursor-pointer list-none p-5 text-white/90 flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-white/40 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="px-5 pb-5 text-white/70 text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section id="rules" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Rules & Eligibility</h2>
          <p className="mt-2 text-white/60">Important guidelines for National CTF Competition 2025.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Eligibility
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🏫</span>
                  <span>Participants must be current school, college, polytechnic, university students, or corporate job holders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">👥</span>
                  <span>Teams must consist of 1–4 members.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">⏰</span>
                  <span>After the registration deadline, team members cannot be changed or added.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🤝</span>
                  <span>Cross-institution teams are allowed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🏛️</span>
                  <span>Universities should be UGC registered & other institutions must be recognized as Bangladeshi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🥇</span>
                  <span>Top 32 teams from the preliminary round and 3 teams from Daffodil International University — total 35 teams — will qualify for the final round.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🪪</span>
                  <span>All team members must bring hard copies of their student ID or proof of studentship documents submitted during registration. Failure to do so will result in disqualification.</span>
                </li>
              </ul>
            </div>

            {/* Fair Play Rules */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                Fair Play Rules
              </h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🚫</span>
                  <span>Do not attack or DDoS the challenge infrastructure or other teams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🔒</span>
                  <span>No automated scans or brute-forcing on the flag validation endpoint or event infrastructure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🤐</span>
                  <span>No sharing of flags, solutions, or hints outside your team.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Location</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6 items-stretch">

            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="DIU Location"
                className="w-full h-[400px] md:h-[350px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.12324150444!2d90.3119246!3d23.8707891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1759309727039!5m2!1sen!2sbdf6"
              />
            </div>
            <div className="max-w-lg">
              <div className="rounded-xl border border-white/10 p-5 bg-transparent">
                <div className="text-white/80 font-medium">Venue details</div>
                <ul className="mt-3 text-white/70 text-sm space-y-2">
                  <li>Daffodil International University</li>
                  <li>Daffodil Smart City, Birulia, Savar, Dhaka, Bangladesh</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="register" className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-16">
          <div className="rounded-2xl border border-emerald-400/20 bg-transparent p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Ready to hack?</h3>
              <p className="text-white/70 mt-1">Sign up your team and receive updates.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://forms.gle/N1hmSEeUNncPUVvS7" target="_blank" className="px-5 py-2.5 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400">Register</a>
              <a href="#rules" className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white">View Rules</a>
            </div>
          </div>
        </section>

        {/* Organizers CTA */}
        <section id="organizers" className="max-w-screen-2xl mx-auto px-3 sm:px-5 pb-20">
          <div className="rounded-2xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-transparent">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Meet the Organizers</h3>
              <p className="text-white/70 mt-1">See the team behind National CTF Competition 2025.</p>
            </div>
            <a href="/organizers" className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white">View organizers</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-8 text-sm text-white/50 flex items-center justify-between">
          <span>© 2025 DIU CYBERCON</span>
          <div className="flex items-center gap-4">
            <a href="mailto:csclub@diu.edu.bd" className="hover:text-white">Email</a>
            <a href="https://discord.gg/QwHm5F5y" className="hover:text-white">Discord</a>
            <a href="https://www.facebook.com/share/p/17QVYda4sJ/" className="hover:text-white">Facebook</a>
            <a href="https://www.linkedin.com/company/csclubdiu/" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
