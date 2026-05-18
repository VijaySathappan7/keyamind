import { Helmet } from "react-helmet-async";

export default function SEOHead({
  title = "Keyamind Solutions | DMIT Brain Mapping, Fingerprint Analysis & Career Guidance",
  description = "Unlock hidden intelligence and career potential with Keyamind Solutions — India's trusted DMIT brain mapping, fingerprint analysis, parenting consultation, child development, and career guidance experts.",
  keywords = `
    Keyamind Solutions,
    DMIT Test India,
    Brain Mapping,
    Fingerprint Analysis,
    Career Guidance,
    Child Intelligence Test,
    Parenting Consultation,
    DMIT Chennai,
    DMIT Tamil Nadu,
    Brain Development,
    Learning Style Analysis,
    Career Counselling,
    Student Career Guidance,
    Dermatoglyphics Test,
    Mid Brain Activation,
    Child Skill Analysis,
    Parenting Support,
    Intelligence Mapping,
    Personality Analysis
  `,
  canonical = "https://keyamind.com/",
  ogImage = "https://keyamind.com/og-image.webp",
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