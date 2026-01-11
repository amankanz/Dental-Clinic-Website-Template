// // Dental Clinic Website Template/src/app/App.tsx
// import { Navigation } from './components/Navigation';
// import { Hero } from './components/Hero';
// import { TrustSignals } from './components/TrustSignals';
// import { About } from './components/About';
// import { Services } from './components/Services';
// import { Reviews } from './components/Reviews';
// import { Location } from './components/Location';
// import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';
// import { WhatsAppFAB } from './components/WhatsAppFAB';
// import { ScrollToTop } from './components/ScrollToTop';
// import { useEffect, useState } from "react";
// import type { Business } from "./types/business";
//
//
// /**
//  * BrightSmile Dental Clinic - Premium Mobile-First Website Template
//  *
//  * This is a demo website template for local dental clinic businesses.
//  *
//  * Features:
//  * - Mobile-first responsive design
//  * - Professional healthcare-grade UI
//  * - WhatsApp and call-to-action buttons
//  * - Placeholder states for missing information
//  * - Smooth animations and micro-interactions
//  *
//  * To show placeholder states:
//  * - Set hasDescription={false} on About component
//  * - Set hasServices={false} on Services component
//  * - Set hasReviews={false} on Reviews component
//  * - Set contactInfo to undefined on Contact component
//  */
//
// export default function App() {
//     const [businesses, setBusinesses] = useState<Business[]>([]);
//     const [activeBusiness, setActiveBusiness] = useState<Business | null>(null);
//
//     useEffect(() => {
//       fetch("/data/businesses.json")
//         .then(res => res.json())
//         .then(data => {
//           setBusinesses(data);
//           setActiveBusiness(data[0]); // for now: first business
//         })
//         .catch(err => {
//           console.error("Failed to load businesses.json", err);
//         });
//     }, []);
//
//   // High-quality dental clinic images from Unsplash
//   const heroImage = 'https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgwODM1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
//
//   const mapImage = 'https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODA4MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
//
//   // Contact information - set to undefined to show placeholder states
//   const contactInfo = {
//     phone: '(555) 123-4567',
//     whatsapp: '1234567890',
//     email: 'info@brightsmile.com',
//   };
//
//   if (!activeBusiness) {
//     return <div className="p-6 text-center">Loading preview…</div>;
//   }
//
//
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <Navigation />
//
//       {/* Hero Section - Full width, starts below nav */}
//       <div className="pt-16">
//         <Hero backgroundImage={heroImage} />
//       </div>
//
//       {/* Trust Signals */}
//       <TrustSignals />
//
//       {/* About Section */}
//       <About hasDescription={true} />
//
//       {/* Services Section */}
//       <Services hasServices={true} />
//
//       {/* Reviews Section */}
//       <Reviews hasReviews={true} />
//
//       {/* Location Section */}
//       <Location mapImage={mapImage} />
//
//       {/* Contact Section */}
//       <Contact contactInfo={contactInfo} />
//
//       {/* Footer */}
//       <Footer />
//
//       {/* WhatsApp Floating Action Button (Mobile) */}
//       <WhatsAppFAB />
//
//       {/* Scroll to Top Button */}
//       <ScrollToTop />
//     </div>
//   );
// }



// Dental Clinic Website Template/src/app/App.tsx
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { About } from './components/About';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect, useState } from "react";
import type { Business } from "./types/business";


/**
 * BrightSmile Dental Clinic - Premium Mobile-First Website Template
 *
 * This is a demo website template for local dental clinic businesses.
 *
 * Features:
 * - Mobile-first responsive design
 * - Professional healthcare-grade UI
 * - WhatsApp and call-to-action buttons
 * - Placeholder states for missing information
 * - Smooth animations and micro-interactions
 *
 * To show placeholder states:
 * - Set hasDescription={false} on About component
 * - Set hasServices={false} on Services component
 * - Set hasReviews={false} on Reviews component
 * - Set contactInfo to undefined on Contact component
 */

export default function App() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [activeBusiness, setActiveBusiness] = useState<Business | null>(null);

    useEffect(() => {
      fetch("/data/businesses.json")
        .then(res => res.json())
        .then(data => {
          setBusinesses(data);
          setActiveBusiness(data[0]); // for now: first business
        })
        .catch(err => {
          console.error("Failed to load businesses.json", err);
        });
    }, []);

  // High-quality dental clinic images from Unsplash
  const heroImage = 'https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgwODM1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const mapImage = 'https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODA4MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  // Contact information - set to undefined to show placeholder states
  const contactInfo = {
    phone: '(555) 123-4567',
    whatsapp: '1234567890',
    email: 'info@brightsmile.com',
  };

  function resolveContactInfo(
  business: any,
  fallback: ContactInfo
): ContactInfo {
  const hasValidData =
    business.phone?.trim() ||
    business.whatsapp?.trim() ||
    business.email?.trim();

  return hasValidData
    ? {
        phone: business.phone,
        whatsapp: business.whatsapp,
        email: business.email,
      }
    : fallback;
}


  if (!activeBusiness) {
    return <div className="p-6 text-center">Loading preview…</div>;
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Full width, starts below nav */}
      <div className="pt-16">
        <Hero
          backgroundImage={heroImage}
//           title={activeBusiness.name}
          name={activeBusiness.name}
          category="Dental Clinic"
          city={activeBusiness.city}
          address={activeBusiness.address}
          whatsapp={activeBusiness.whatsapp}
          mapsUrl={activeBusiness.maps_url}
        />

      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* About Section */}
      <About
        description={activeBusiness.about}
      />

      {/* Services Section */}
      <Services
        services={activeBusiness.services}
      />

      {/* Reviews Section */}
      <Reviews
        reviews={activeBusiness.reviews}
      />

      {/* Location Section */}
      <Location mapImage={mapImage} />

      {/* Contact Section */}
      <Contact
        Contact contactInfo={resolveContactInfo(activeBusiness, contactInfo)}
      />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Action Button (Mobile) */}
      <WhatsAppFAB />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}