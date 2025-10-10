import Image from "next/image";
import Link from "next/link";

export default function OrganizersPage() {
  const groups: Array<{
    title: string;
    note?: string;
    people: Array<{ name: string; role?: string; img?: string; id?: string }>;
  }> = [
      // {
      //   title: "Faculty Advisor(s)",
      //   people: [
      //     { name: "[Name]", role: "Faculty Advisor", img: "/mamun.png" },
      //   ],
      // },
      // {
      //   title: "Club President",
      //   people: [
      //     { name: "[Name]", role: "President", img: "/mamun.png" },
      //   ],
      // },
      // {
      //   title: "Event Conveners",
      //   people: [
      //     { name: "[Name]", role: "Convener", img: "/mamun.png" },
      //     { name: "[Name]", role: "Co-Convener", img: "/mamun.png" },
      //   ],
      // },
      // {
      //   title: "Core Committee",
      //   // note: "[Names & Roles]",
      //   people: [
      //     { name: "[Name]", role: "CTF Challenge Lead", img: "/mamun.png" },
      //     { name: "[Name]", role: "Operations & Logistics", img: "/mamun.png" },
      //     { name: "[Name]", role: "Design & Communications", img: "/mamun.png" },
      //     { name: "[Name]", role: "Sponsorships & Partnerships", img: "/mamun.png" },
      //   ],
      // },
      // {
      //   title: "Volunteer Team",
      //   // note: "[Names only]",
      //   people: [
      //     { name: "[Name]", id: "[ID]" },
      //     { name: "[Name]", id: "[ID]" },
      //     { name: "[Name]", id: "[ID]" },
      //     { name: "[Name]", id: "[ID]" },
      //   ],
      // },
    ];

  return (
    <div className="min-h-screen bg-[#3b065e] text-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Organizers</h1>
        <p className="mt-2 text-white/70">The people who make this event possible.</p>

        <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
          <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />
          <div className="flex items-center gap-5">
            <Image src="/csc.jpeg" alt="Cyber Security Club (CSC)" width={80} height={80} className="h-20 w-20 rounded-xl object-contain border border-emerald-400/30 bg-white/10" />
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="text-white/80">Organized by</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-black text-[11px] font-semibold">Official Host</span>
              </div>
              <div className="text-white font-semibold tracking-tight">Cyber Security Club (CSC), Department of CSE, DIU</div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-10">
          {groups.map((g) => (
            <section key={g.title}>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold">{g.title}</h2>
                {g.note && <div className="text-white/50 text-xs mt-1">{g.note}</div>}
              </div>
              {g.title === "Volunteer Team" ? (
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {g.people.map((p, idx) => (
                    <div key={`${g.title}-${p.name}-${idx}`} className="rounded-full border border-white/10 px-4 py-2 text-center text-white/90">
                      {p.name}{p.id ? ` — ${p.id}` : ""}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {g.people.map((p, idx) => (
                    <div key={`${g.title}-${p.name}-${idx}`} className="rounded-2xl border border-white/10 p-5 bg-transparent shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-shadow">
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center">
                          <Image
                            src={p.img ?? "/mamun.png"}
                            alt={p.name}
                            width={240}
                            height={240}
                            className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full border border-white/10 shadow-md"
                          />
                        </div>
                        <div className="w-full text-center">
                          <div className="text-white font-semibold tracking-tight">{p.name}</div>
                          {p.role && (
                            <div className="mt-1 inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/80">
                              {p.role}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm text-white/70 hover:text-white">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}


