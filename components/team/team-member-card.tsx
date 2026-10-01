import Image from "next/image";
import { Award, Building2 } from "lucide-react";
import { TeamMember } from "@/lib/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 sm:p-10 shadow-xs hover:border-[#650dd4]/30 hover:shadow-md transition-all duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Avatar & Essentials */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
          {member.photoUrl ? (
            <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-md shadow-purple-900/10 mb-4 border border-[#e5e7eb]">
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          ) : (
            <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-[#650dd4] to-[#450993] text-white flex items-center justify-center shadow-md shadow-purple-900/10 mb-4">
              <span className="font-serif text-3xl font-bold tracking-tight">
                {member.initials}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-serif font-bold text-[#191919]">
            {member.name}
          </h3>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#650dd4] mt-1">
            {member.role}
          </p>

          {member.institutions && member.institutions.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] w-full text-xs text-[#5f5f5f]">
              <span className="font-bold text-[#191919] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-[#650dd4]" />
                <span>Collaborating Institutions:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {member.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Bio Narrative & Expertise Tags */}
        <div className="lg:col-span-8 space-y-5 lg:border-l lg:border-[#e5e7eb] lg:pl-8">
          <div className="space-y-3 text-sm sm:text-base text-[#5f5f5f] leading-relaxed">
            {member.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-2">
            <span className="font-bold text-[#191919] text-xs uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-[#650dd4]" />
              <span>Core Specializations:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((exp) => (
                <span
                  key={exp}
                  className="px-3 py-1 rounded-md bg-[#fafafa] border border-[#e5e7eb] text-xs font-medium text-gray-800"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
