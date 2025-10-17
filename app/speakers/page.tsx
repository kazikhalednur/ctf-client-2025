"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import JabedImage from "@/assets/speakers/jabed_morshed_chowdhury.jpg";
import SamiulImage from "@/assets/speakers/samiul_islam.jpg";
import ShaheeImage from "@/assets/speakers/shahee_mirza.jpg";

type Speaker = {
    id: string;
    name: string;
    title: string;
    bio: string;
    img: typeof JabedImage;
    linkedin: string;
    expertise: string;
};

const speakers: Speaker[] = [
    {
        id: "s1",
        name: "Dr. Jabed Morshed Chowdhury",
        title: "Senior Lecturer at La Trobe University, Melbourne, Australia",
        bio: "Dr. Jabed Morshed Chowdhury is a Senior Lecturer at La Trobe University in Melbourne, Australia. He specializes in Digital Forensics and brings extensive academic and practical expertise in forensic analysis, incident response, and cybersecurity research. His work focuses on advancing forensic methodologies and digital evidence analysis techniques.",
        img: JabedImage,
        linkedin: "https://www.linkedin.com/in/jabedmchowdhury/",
        expertise: "Digital Forensics"
    },
    {
        id: "s2",
        name: "Samiul Islam",
        title: "L2 SOC Analyst | Technical trainer FIRST community | GIAC GSOC | Wireshark Certified Network Analyst | MITRE ATT&CK Defender",
        bio: "Samiul Islam is a Level 2 SOC Analyst and technical trainer in the FIRST community. He holds multiple certifications including GIAC GSOC and is a Wireshark Certified Network Analyst and MITRE ATT&CK Defender. His expertise lies in Security Operations Center analysis, threat detection, incident response, and defensive security strategies.",
        img: SamiulImage,
        linkedin: "https://www.linkedin.com/in/samiul008/",
        expertise: "Blue Team"
    },
    {
        id: "s3",
        name: "Shahee Mirza",
        title: "Cybersecurity Entrepreneur & CISO | GIAC Advisory Board Member | ISC2 UBK Lead Editor | Offensive Security Thought Leader | Inspiring the Next Gen | CISSP, GRTP, C)ISSO, CCISO, CEH, MCSA, MCP",
        bio: "Shahee Mirza is a Cybersecurity Entrepreneur and CISO with extensive experience in offensive security. He serves as a GIAC Advisory Board Member and ISC2 UBK Lead Editor. As an Offensive Security Thought Leader, he inspires the next generation of cybersecurity professionals. His certifications include CISSP, GRTP, C)ISSO, CCISO, CEH, MCSA, and MCP.",
        img: ShaheeImage,
        linkedin: "https://www.linkedin.com/in/shaheemirza/",
        expertise: "Red Team"
    },
];

export default function SpeakersPage() {
    const [active, setActive] = useState<Speaker | null>(null);

    return (
        <div className="min-h-screen bg-[#3b065e] text-white">
            {/* Header */}
            <header className="border-b border-white/10 backdrop-blur sticky top-0 z-20 bg-gradient-to-b from-[#3b065e]/70 to-transparent">
                <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/diu_cybercon.png" alt="CTF" width={64} height={64} className="rounded" />
                        <span className="text-xl font-medium tracking-wide text-white/90">DIU CYBERCON</span>
                    </div>
                    <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
                        <Link href="/#about" className="hover:text-white">ABOUT</Link>
                        <Link href="/speakers" className="hover:text-white text-white">SPEAKERS</Link>
                        <Link href="/#timeline" className="hover:text-white">EVENTS</Link>
                        <Link href="/#prizes" className="hover:text-white">PRIZES</Link>
                        <Link href="/#organizers" className="hover:text-white">ORGANIZERS</Link>
                        <Link href="/#faq" className="hover:text-white">FAQ</Link>
                        <a href="https://forms.gle/N1hmSEeUNncPUVvS7" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400">REGISTER</a>
                    </nav>
                </div>
                {/* Mobile nav */}
                <div className="sm:hidden border-t border-white/10">
                    <nav className="max-w-screen-2xl mx-auto px-3 py-3 flex items-center gap-3 overflow-x-auto text-xs text-white/70 [scrollbar-width:none] [-ms-overflow-style:none]">
                        <style jsx>{`
                            nav::-webkit-scrollbar{display:none}
                        `}</style>
                        <Link href="/#about" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">ABOUT</Link>
                        <Link href="/speakers" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/10">SPEAKERS</Link>
                        <Link href="/#timeline" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">EVENTS</Link>
                        <Link href="/#prizes" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">PRIZES</Link>
                        <Link href="/#organizers" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">ORGANIZERS</Link>
                        <Link href="/#faq" className="shrink-0 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30">FAQ</Link>
                        <a href="https://forms.gle/N1hmSEeUNncPUVvS7" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1.5 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 border border-emerald-400/30">REGISTER</a>
                    </nav>
                </div>
            </header>

            <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Speakers</h1>
                <p className="mt-2 text-white/70">Meet our speakers. Click a card to learn more.</p>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {speakers.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActive(s)}
                            className="text-left rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    <Image
                                        src={s.img}
                                        alt={s.name}
                                        width={160}
                                        height={160}
                                        className="h-32 w-32 object-cover rounded-full border-2 border-white/20"
                                    />
                                    <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold">
                                        {s.expertise.charAt(0)}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-semibold text-lg">{s.name}</div>
                                    <div className="text-white/70 text-sm mt-1 leading-relaxed">{s.title}</div>
                                    <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-medium">
                                        {s.expertise}
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {active && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60" onClick={() => setActive(null)} />
                        <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-[#2a0446] p-8">
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="flex-shrink-0">
                                    <Image src={active.img} alt={active.name} width={120} height={120} className="h-30 w-30 rounded-full border-2 border-white/20 object-cover" />
                                    <div className="mt-3 text-center">
                                        <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-sm font-medium">
                                            {active.expertise}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-2xl font-bold text-white">{active.name}</div>
                                    <div className="text-white/70 text-base mt-2 leading-relaxed">{active.title}</div>
                                    <p className="mt-4 text-white/80 text-sm leading-relaxed">{active.bio}</p>
                                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={active.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center font-medium"
                                        >
                                            View LinkedIn Profile
                                        </a>
                                        <button
                                            onClick={() => setActive(null)}
                                            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
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


