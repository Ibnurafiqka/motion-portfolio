"use client";

"use client";

import TechLogo from "@/components/TechLogo";
import { techLogos } from "@/data/site";
import Marquee from "@/components/Marquee";

export default function LogoCloud() {
  const midpoint = Math.ceil(techLogos.length / 2);
  const firstRow = techLogos.slice(0, midpoint);
  const secondRow = techLogos.slice(midpoint);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2/40 py-10">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((logo) => (
          <TechLogo key={logo.name} name={logo.name} icon={logo.icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:22s] mt-6">
        {secondRow.map((logo) => (
          <TechLogo key={logo.name} name={logo.name} icon={logo.icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/90 via-background/40 to-transparent" />
    </div>
  );
}
