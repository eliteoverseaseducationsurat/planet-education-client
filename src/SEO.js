import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  const siteName = 'Planet Education Surat';
  const defaultDescription = 'Overseas education consultancy in Surat helping students study abroad.';
  const domain = 'https://planeteducationsurat.in';

  return (
    <Helmet>
      {/* Page Title & Basic Meta */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || 'study abroad, overseas education, Surat, student visa, IELTS'} />

      {/* Open Graph Tags for Social Previews */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={url ? `${domain}${url}` : domain} />

      {/* Canonical URL */}
      <link rel="canonical" href={url ? `${domain}${url}` : domain} />
    </Helmet>
  );
};

export default SEO;
