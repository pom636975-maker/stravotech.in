import React from 'react';
import { Helmet } from 'react-helmet-async';

type OpenGraph = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  twitterHandle?: string;
  structuredData?: object | object[] | null;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  openGraph,
  twitterHandle,
  structuredData,
}) => {
  const siteName = 'Stravotech';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  // Support single or array of structured data objects
  const sdArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={openGraph?.title || fullTitle} />
      <meta property="og:description" content={openGraph?.description || description} />
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content={openGraph?.image ? 'summary_large_image' : 'summary'} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      <meta name="twitter:title" content={openGraph?.title || fullTitle} />
      <meta name="twitter:description" content={openGraph?.description || description} />
      {openGraph?.image && <meta name="twitter:image" content={openGraph.image} />}

      {/* Structured data JSON-LD – supports multiple objects */}
      {sdArray.map((sd, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(sd)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
