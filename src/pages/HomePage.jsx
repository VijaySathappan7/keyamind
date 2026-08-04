import { lazy } from "react";
import HeroSection from "../components/HeroSection";
import SEOHead from "../components/SEOHead";
import LazySection from "../components/LazySection";

// Lazy-loaded below-the-fold sections
const IkigaiSection = lazy(() => import("../components/IkigaiSection"));
const InherentBrainMappingSection = lazy(() => import("../components/InherentBrainMappingSection"));
const FingerprintCharacteristicsSection = lazy(() => import("../components/FingerprintCharacteristicsSection"));
const YoutubeSection = lazy(() => import("../components/YoutubeSection"));
const WhatWeDoSection = lazy(() => import("../components/WhatWeDoSection"));
const BrainBalanceSection = lazy(() => import("../components/BrainBalanceSection"));
const BrainLobeFunctionalitySection = lazy(() => import("../components/BrainLobeFunctionalitySection"));
const HumanQuotientsSection = lazy(() => import("../components/HumanQuotientsSection"));

const LearningStylesSection = lazy(() => import("../components/LearningStylesSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const FeedbackMarqueeSection = lazy(() => import("../components/FeedbackMarqueeSection"));
const FounderProfileSection = lazy(() => import("../components/FounderProfileSection"));
const ExpertiseSection = lazy(() => import("../components/ExpertiseSection"));
const ContentSection = lazy(() => import("../components/ContentSection"));

export default function HomePage() {
  return (
    <>
      {/* Primary default SEO tags for Homepage */}
      <SEOHead />

      {/* 1. Hero (Statically imported - above the fold) */}
      <HeroSection />

      {/* 2. Ikigai */}
      <LazySection height="550px">
        <IkigaiSection />
      </LazySection>

      {/* 3. Inherent Brain Mapping */}
      <LazySection height="650px">
        <InherentBrainMappingSection />
      </LazySection>

      {/* 4. Fingerprint Story */}
      <LazySection height="600px">
        <FingerprintCharacteristicsSection />
      </LazySection>

      {/* 4.5 Video Deep Dive */}
      <LazySection height="450px">
        <YoutubeSection />
      </LazySection>

      {/* 5. What We Do */}
      <LazySection height="650px">
        <WhatWeDoSection />
      </LazySection>

      {/* 6. Brain Left and Right Balance */}
      <LazySection height="700px">
        <BrainBalanceSection />
      </LazySection>

      {/* 7. Lobes of the Brain */}
      <LazySection height="700px">
        <BrainLobeFunctionalitySection />
      </LazySection>

      {/* 8. Quotients */}
      <LazySection height="600px">
        <HumanQuotientsSection />
      </LazySection>



      {/* 10. Learning Styles */}
      <LazySection height="750px">
        <LearningStylesSection />
      </LazySection>

      {/* 11. Services */}
      <LazySection height="600px">
        <ServicesSection />
      </LazySection>

      {/* 12. Feedbacks */}
      <LazySection height="450px">
        <FeedbackMarqueeSection />
      </LazySection>

      {/* 13. Founder Profile */}
      <LazySection height="600px">
        <FounderProfileSection />
      </LazySection>

      {/* 14. Expertise */}
      <LazySection height="500px">
        <ExpertiseSection />
      </LazySection>

      {/* 15. Contact & Footer */}
      <LazySection height="800px">
        <ContentSection />
      </LazySection>
    </>
  );
}
