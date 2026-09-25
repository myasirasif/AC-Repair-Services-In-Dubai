import { services, siteConfig, areas } from "@/lib/site-config";

export function BusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: `${siteConfig.subline}.`,
    url: siteConfig.url,
    telephone: siteConfig.phone.international,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "Quoted on inspection",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
    areaServed: areas.map((a) => ({ "@type": "Place", name: `${a}, Dubai` })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: `${siteConfig.url}/services#${s.id}` },
      })),
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
