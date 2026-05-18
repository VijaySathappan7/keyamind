import { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection";
import SectionSkeleton from "../components/SectionSkeleton";
import SEOHead from "../components/SEOHead";

// Lazy-loaded below-fold sections
const IkigaiSection                   = lazy(() => import("../components/IkigaiSection"));
const InherentBrainMappingSection     = lazy(() => import("../components/InherentBrainMappingSection"));
const FingerprintCharacteristicsSection = lazy(() => import("../components/FingerprintCharacteristicsSection"));
const YoutubeSection                  = lazy(() => import("../components/YoutubeSection"));
const WhatWeDoSection                 = lazy(() => import("../components/WhatWeDoSection"));
const BrainBalanceSection             = lazy(() => import("../components/BrainBalanceSection"));
const BrainLobeFunctionalitySection   = lazy(() => import("../components/BrainLobeFunctionalitySection"));
const HumanQuotientsSection           = lazy(() => import("../components/HumanQuotientsSection"));
const PersonalitySection              = lazy(() => import("../components/PersonalitySection"));
const LearningStylesSection           = lazy(() => import("../components/LearningStylesSection"));
const ServicesSection                 = lazy(() => import("../components/ServicesSection"));
const FeedbackMarqueeSection          = lazy(() => import("../components/FeedbackMarqueeSection"));
const FounderProfileSection           = lazy(() => import("../components/FounderProfileSection"));
const ExpertiseSection                = lazy(() => import("../components/ExpertiseSection"));
const ContentSection                  = lazy(() => import("../components/ContentSection"));

export default function HomePage() {
  return (
    <>
      {/* Primary default SEO tags for Homepage */}
      <SEOHead />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Ikigai */}
      <Suspense fallback={<SectionSkeleton />}>
        <IkigaiSection />
      </Suspense>

      {/* 3. Inherent Brain Mapping */}
      <Suspense fallback={<SectionSkeleton />}>
        <InherentBrainMappingSection />
      </Suspense>

      {/* 4. Fingerprint Story */}
      <Suspense fallback={<SectionSkeleton />}>
        <FingerprintCharacteristicsSection />
      </Suspense>

      {/* 4.5 Video Deep Dive */}
      <Suspense fallback={<SectionSkeleton />}>
        <YoutubeSection />
      </Suspense>

      {/* 5. What We Do */}
      <Suspense fallback={<SectionSkeleton />}>
        <WhatWeDoSection />
      </Suspense>

      {/* 6. Brain Left and Right Balance */}
      <Suspense fallback={<SectionSkeleton />}>
        <BrainBalanceSection />
      </Suspense>

      {/* 7. Lobes of the Brain */}
      <Suspense fallback={<SectionSkeleton />}>
        <BrainLobeFunctionalitySection />
      </Suspense>

      {/* 8. Quotients */}
      <Suspense fallback={<SectionSkeleton />}>
        <HumanQuotientsSection />
      </Suspense>

      {/* 9. Natural Personality */}
      <Suspense fallback={<SectionSkeleton />}>
        <PersonalitySection />
      </Suspense>

      {/* 10. Learning Styles */}
      <Suspense fallback={<SectionSkeleton />}>
        <LearningStylesSection />
      </Suspense>

      {/* 11. Services */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* 12. Feedbacks */}
      <Suspense fallback={<SectionSkeleton />}>
        <FeedbackMarqueeSection />
      </Suspense>

      {/* 13. Founder Profile */}
      <Suspense fallback={<SectionSkeleton />}>
        <FounderProfileSection />
      </Suspense>

      {/* 14. Expertise */}
      <Suspense fallback={<SectionSkeleton />}>
        <ExpertiseSection />
      </Suspense>

      {/* 15. Contact & Footer */}
      <Suspense fallback={<SectionSkeleton />}>
        <ContentSection />
      </Suspense>
    </>
  );
}
