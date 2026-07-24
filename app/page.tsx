import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Story } from "@/components/story";
import { Features } from "@/components/features";
import { Spotlights } from "@/components/spotlights";
import { Backstage } from "@/components/backstage";
import { Ceremony } from "@/components/ceremony";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { Waitlist } from "@/components/waitlist";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Story />
        <Features />
        <Spotlights />
        <Backstage />
        <Ceremony />
        <HowItWorks />
        <Faq />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
