import HeroSection from "../components/HeroSection";
import SEOHead from "../components/SEOHead";

import IkigaiSection from "../components/IkigaiSection";
import InherentBrainMappingSection from "../components/InherentBrainMappingSection";
import FingerprintCharacteristicsSection from "../components/FingerprintCharacteristicsSection";
import YoutubeSection from "../components/YoutubeSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import BrainBalanceSection from "../components/BrainBalanceSection";
import BrainLobeFunctionalitySection from "../components/BrainLobeFunctionalitySection";
import HumanQuotientsSection from "../components/HumanQuotientsSection";
import PersonalitySection from "../components/PersonalitySection";
import LearningStylesSection from "../components/LearningStylesSection";
import ServicesSection from "../components/ServicesSection";
import FeedbackMarqueeSection from "../components/FeedbackMarqueeSection";
import FounderProfileSection from "../components/FounderProfileSection";
import ExpertiseSection from "../components/ExpertiseSection";
import ContentSection from "../components/ContentSection";

export default function HomePage() {
  return (
    <>
      {/* Primary default SEO tags for Homepage */}
      <SEOHead />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Ikigai */}
      <IkigaiSection />

      {/* 3. Inherent Brain Mapping */}
      <InherentBrainMappingSection />

      {/* 4. Fingerprint Story */}
      <FingerprintCharacteristicsSection />

      {/* 4.5 Video Deep Dive */}
      <YoutubeSection />

      {/* 5. What We Do */}
      <WhatWeDoSection />

      {/* 6. Brain Left and Right Balance */}
      <BrainBalanceSection />

      {/* 7. Lobes of the Brain */}
      <BrainLobeFunctionalitySection />

      {/* 8. Quotients */}
      <HumanQuotientsSection />

      {/* 9. Natural Personality */}
      <PersonalitySection />

      {/* 10. Learning Styles */}
      <LearningStylesSection />

      {/* 11. Services */}
      <ServicesSection />

      {/* 12. Feedbacks */}
      <FeedbackMarqueeSection />

      {/* 13. Founder Profile */}
      <FounderProfileSection />

      {/* 14. Expertise */}
      <ExpertiseSection />

      {/* 15. Contact & Footer */}
      <ContentSection />
    </>
  );
}
