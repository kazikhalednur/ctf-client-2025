"use client";

import Image from "next/image";
import { useState } from "react";

type Speaker = {
    id: string;
    name: string;
    title: string;
    bio: string;
    img: string;
};

const speakers: Speaker[] = [
    // {
    //     id: "s1",
    //     name: "[Speaker Name]",
    //     title: "Security Researcher",
    //     bio: "Speaker bio goes here. Expertise in web security, bug bounty, and secure coding.",
    //     img: "/mamun.png",
    // },
    // {
    //     id: "s2",
    //     name: "[Speaker Name]",
    //     title: "Incident Responder",
    //     bio: "Experienced in DFIR, threat hunting, and SOC operations.",
    //     img: "/mamun.png",
    // },
    // {
    //     id: "s3",
    //     name: "[Speaker Name]",
    //     title: "AppSec Engineer",
    //     bio: "Focus on SDLC, threat modeling, and automation for large-scale apps.",
    //     img: "/mamun.png",
    // },
];

export default function SpeakersPage() {
    const [active, setActive] = useState<Speaker | null>(null);

    return (
        <div className="min-h-screen bg-[#3b065e] text-white">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Speakers</h1>
                <p className="mt-2 text-white/70">Meet our speakers. Click a card to learn more.</p>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {speakers.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActive(s)}
                            className="text-left rounded-2xl border border-white/10 p-5 bg-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <Image src={s.img} alt={s.name} width={160} height={160} className="h-28 w-28 object-cover rounded-full border border-white/10" />
                                <div className="text-white font-medium text-center">{s.name}</div>
                                <div className="text-white/70 text-sm text-center">{s.title}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {active && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60" onClick={() => setActive(null)} />
                        <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-[#2a0446] p-6">
                            <div className="flex items-start gap-4">
                                <Image src={active.img} alt={active.name} width={96} height={96} className="h-24 w-24 rounded-full border border-white/10 object-cover" />
                                <div>
                                    <div className="text-xl font-semibold">{active.name}</div>
                                    <div className="text-white/70 text-sm">{active.title}</div>
                                </div>
                            </div>
                            <p className="mt-4 text-white/80 text-sm leading-relaxed">{active.bio}</p>
                            <div className="mt-6 flex justify-end">
                                <button onClick={() => setActive(null)} className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40">Close</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


