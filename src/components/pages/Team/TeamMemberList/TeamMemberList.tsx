// components/TeamSectionRaw.tsx
import Image from "next/image";

const leaders = [
  {
    name: "Rakibul Hassan",
    title: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Ihsan Mahbub",
    title: "CTO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Md. Yunus Ali",
    title: "COO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Raquib Shikder",
    title: "Head of SEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
  },
];

const teamMembers = [
  // Replace with real names/images when ready
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1517841902196-5ebfa0a158b5?w=800&auto=format&fit=crop&q=80" },
  { name: "Employee Name", title: "DESIGNATION", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80" },
];

export default function TeamSectionRaw() {
  return (
    <div className="bg-black text-white rounded py-16 md:py-24 px-5 sm:px-8 md:px-12">
      <div className="container mx-auto">

        {/* Leaders */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold  mb-12 tracking-tight">
            Inforisen <span className="font-playfair font-medium" >Leaders</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {leaders.map((person) => (
              <div
                key={person.name}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/60"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                   className="object-cover brightness-90 transition-all rounded-xl duration-500 group-hover:brightness-110 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                </div>

               <div className="pt-4 pb-6">
                  <h3 className="text-base md:text-lg font-medium">{person.name}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm mt-1.5 uppercase tracking-wide">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section>
           <h2 className="text-4xl md:text-5xl font-medium  mb-12 tracking-tight">
            Team <span className="font-playfair font-medium" >Members</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {teamMembers.map((person, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/60"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover brightness-90 rounded-xl transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                <div className="pt-4 pb-6">
                  <h3 className="text-base md:text-lg font-medium">{person.name}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm mt-1.5 uppercase tracking-wide">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}