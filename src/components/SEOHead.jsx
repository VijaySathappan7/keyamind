import { Helmet } from "react-helmet-async";

export default function SEOHead({
  title = "Keyamind Solutions | Best IBM Test, Fingerprint Analysis & Expert Career Counselling",
  description = "Discover clarity with India's trusted IBM Test, Fingerprint Analysis, and expert Career Counselling. Unlock your intelligence and career potential with Keyamind Solutions.",
  keywords = `
    IBM Test,
    Career Counselling,
    Fingerprint Analysis,
    Keyamind Solutions,
    IBM Brain Mapping,
    Best Career Counsellor,
    Student Career Guidance,
    Dermatoglyphics Test,
    Child Intelligence Test,
    Parenting Consultation,
    Learning Style Analysis,
    Mid Brain Activation,
    Personality Analysis,
    IBM Test India,
    Best IBM Center,
    Career Assessment Test,
    Student Stream Selection Assessment,
    Cognitive Ability Mapping,
    Multiple Intelligence Assessment,
    Psychological Counselling,
    Fingerprint Scanner Counseling,
    Innate Brain Mapping Multiple Intelligence Test,
    Brain Lobe Dominance Test,
    Learning Styles and Habits Assessment,
    Parenting Style Counseling,
    Best Career Counsellor in Chennai,
    Corporate Assessment and Team Building,
    Inborn Talents Assessment,
    Adult Career Transition Mapping,
    Child Intelligence Assessment,
    Fingerprint Analysis India
  `,
  canonical = "https://keyamind.com/",
  ogImage = "https://keyamind.com/fulllogowhite.png",
  ogType = "website",
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Keyamind Solutions",
    url: "https://keyamind.com/",
    logo: "https://keyamind.com/logosquare.webp",
    image: ogImage,
    description,
    telephone: "+91XXXXXXXXXX",
    email: "support@keyamind.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Tamil Nadu",
    },
    sameAs: [
      "https://www.instagram.com/keyamind_solutions",
      "https://www.facebook.com/keyamindsolutions",
      "https://in.linkedin.com/in/swathi-deivanai-3409601ba"
    ],
  };

  return (
    <Helmet prioritizeSeoTags>

      {/* ================= PRIMARY SEO ================= */}
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="canonical" href={canonical} />

      {/* ================= INDEXING ================= */}
      <meta
        name="robots"
        content="
          index,
          follow,
          max-snippet:-1,
          max-image-preview:large,
          max-video-preview:-1
        "
      />

      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* ================= MOBILE ================= */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
      />

      {/* ================= LANGUAGE ================= */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />

      {/* ================= GEO SEO ================= */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Tamil Nadu" />

      {/* ================= BRAND ================= */}
      <meta name="author" content="Keyamind Solutions" />
      <meta name="publisher" content="Keyamind Solutions" />
      <meta name="copyright" content="Keyamind Solutions" />

      {/* ================= OPEN GRAPH ================= */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Keyamind Solutions" />

      <meta property="og:site_name" content="Keyamind Solutions" />
      <meta property="og:locale" content="en_IN" />

      {/* ================= TWITTER ================= */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />

      <meta name="twitter:image" content={ogImage} />

      {/* ================= PERFORMANCE ================= */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* ================= FAVICONS ================= */}
      <link rel="icon" type="image/webp" href="/logosquare.webp" />
      <link rel="apple-touch-icon" href="/logosquare.webp" />

      {/* ================= STRUCTURED DATA ================= */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

    </Helmet>
  );
}