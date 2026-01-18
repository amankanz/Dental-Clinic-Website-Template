// locallead/Dental Clinic Website Template/src/app/preview/PreviewPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { TrustSignals } from "@/app/components/TrustSignals";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Reviews } from "@/app/components/Reviews";
import { Location } from "@/app/components/Location";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { WhatsAppFAB } from "@/app/components/WhatsAppFAB";
import { ScrollToTop } from "@/app/components/ScrollToTop";


import type { Business } from "@/types/business";

export default function PreviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
  if (!slug) return;

  const url = `/data/businesses/${slug}.json`;
  console.log("Loading preview from:", url);

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res.json();
    })
    .then((data: Business) => {
      setBusiness(data);
    })
    .catch((err) => {
      console.error("Preview load error:", err);
      setBusiness(null);
    })
    .finally(() => setLoading(false));
}, [slug]);

  if (loading) {
    return <div className="p-6 text-center">Loading preview…</div>;
  }

  if (!business) {
    return <div className="p-6 text-center">Business not found</div>;
  }

  const heroImage =
    "https://images.unsplash.com/photo-1704455306925-1401c3012117?auto=format&fit=crop&w=1200&q=80";

  const mapImage =
    "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?auto=format&fit=crop&w=1200&q=80";

  const fallbackContact = {
    phone: "(555) 123-4567",
    whatsapp: "1234567890",
    email: "info@example.com",
  };

  const contactInfo =
    business.phone || business.whatsapp || business.email
      ? {
          phone: business.phone,
          whatsapp: business.whatsapp,
          email: business.email,
        }
      : fallbackContact;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation name={business.name} whatsapp={business.whatsapp} />

      <div className="pt-16">
        <Hero
          backgroundImage={heroImage}
          name={business.name}
          category={business.category}
          city={business.city}
          address={business.address}
          whatsapp={business.whatsapp}
          mapsUrl={business.location.maps_url}
        />
      </div>

      <TrustSignals />

      <About description={business.about} />

      <Services
        services={business.services}
        hasServices={true}
      />

      <Reviews
        reviews={business.reviews}
        hasReviews={!!business.reviews?.length}
      />

      <Location
        name={business.name}
        mapImage={mapImage}
        address={business.address}
        mapsUrl={business.location.maps_url}
      />

      <Contact contactInfo={contactInfo} />

      <Footer
        name={business.name}
        address={business.address}
        city={business.city}
      />

      <WhatsAppFAB />
      <ScrollToTop />
    </div>
  );
}
