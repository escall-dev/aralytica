import Image from "next/image";
import { Award, Building2 } from "lucide-react";
import { TeamMember } from "@/lib/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Avatar & Essentials */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
          {member.photoUrl ? (
            <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-md shadow-purple-900/10 mb-4 border border-border">
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          ) : (
            <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-primary to-[#450993] text-white flex items-center justify-center shadow-md shadow-purple-900/10 mb-4 border border-primary/20">
              <span className="font-serif text-3xl font-bold tracking-tight">
                {member.initials}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-serif font-bold text-foreground">
            {member.name}
          </h3>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mt-1">
            {member.role}
          </p>

          {member.institutions && member.institutions.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border w-full text-xs text-muted-foreground">
              <span className="font-bold text-foreground uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-primary" />
                <span>Collaborating Institutions:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {member.institutions.map((inst) => (
                  <span
                    key={inst}
                    className="px-2 py-0.5 rounded bg-surface-subtle text-foreground border border-border font-medium"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Bio Narrative & Expertise Tags */}
        <div className="lg:col-span-8 space-y-5 lg:border-l lg:border-border lg:pl-8">
          <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {member.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-2">
            <span className="font-bold text-foreground text-xs uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-primary" />
              <span>Core Specializations:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((exp) => (
                <span
                  key={exp}
                  className="px-3 py-1 rounded-md bg-surface-subtle border border-border text-xs font-medium text-foreground"
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
