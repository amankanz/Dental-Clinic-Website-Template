// locallead/Dental Clinic Website Template/src/app/component/BusinessCard.tsx
/*
import { motion } from 'motion/react';
import { Star, ExternalLink, Rocket, MapPin } from 'lucide-react';
import { BusinessCard } from './BusinessCard';

// Mock business data
const businesses = [
  {
    id: 1,
    name: 'BrightSmile Dental Clinic',
    category: 'Dental Clinic',
    city: 'San Francisco',
    state: 'CA',
    rating: 4.8,
    reviewCount: 127,
    preview: 'Professional dental care with modern technology and experienced staff.',
    slug: 'brightsmile-dental',
  },
  {
    id: 2,
    name: 'Comfort Dental Care',
    category: 'Dental Clinic',
    city: 'Austin',
    state: 'TX',
    rating: 4.9,
    reviewCount: 203,
    preview: 'Family-friendly dental services in a comfortable, welcoming environment.',
    slug: 'comfort-dental-austin',
  },
  {
    id: 3,
    name: 'SmilePro Dentistry',
    category: 'Dental Clinic',
    city: 'Seattle',
    state: 'WA',
    rating: 4.7,
    reviewCount: 89,
    preview: 'Advanced cosmetic dentistry and general dental care for all ages.',
    slug: 'smilepro-seattle',
  },
  {
    id: 4,
    name: 'Elite Dental Studio',
    category: 'Dental Clinic',
    city: 'New York',
    state: 'NY',
    rating: 4.9,
    reviewCount: 312,
    preview: 'Premium dental services with cutting-edge technology in Manhattan.',
    slug: 'elite-dental-nyc',
  },
  {
    id: 5,
    name: 'Sunshine Dental',
    category: 'Dental Clinic',
    city: 'Miami',
    state: 'FL',
    rating: 4.6,
    reviewCount: 156,
    preview: 'Comprehensive dental care with bilingual staff and flexible hours.',
    slug: 'sunshine-dental-miami',
  },
  {
    id: 6,
    name: 'Modern Smile Dental',
    category: 'Dental Clinic',
    city: 'Denver',
    state: 'CO',
    rating: 4.8,
    reviewCount: 98,
    preview: 'State-of-the-art dental practice focused on patient comfort and care.',
    slug: 'modern-smile-denver',
  },
];

export function Dashboard() {
  const handlePreview = (businessId: number) => {
    console.log('Preview business:', businessId);
    // In a real app, this would navigate to the preview page
  };

  const handleDeploy = (businessId: number) => {
    console.log('Deploy business:', businessId);
    // In a real app, this would trigger Vercel deployment
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar =/}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-gray-900">LocalLead Preview</h1>
              <p className="text-xs text-gray-500">Preview & deploy local business websites</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content =/}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header =/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Business Previews
          </h2>
          <p className="text-gray-600 text-lg">
            Select a business to preview and deploy its website
          </p>
        </motion.div>

        {/* Business Cards Grid =/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <BusinessCard
              key={business.id}
              business={business}
              index={index}
              onPreview={handlePreview}
              onDeploy={handleDeploy}
            />
          ))}
        </div>

        {/* Empty State (for when no businesses exist) =/}
        {businesses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Rocket className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No businesses yet
            </h3>
            <p className="text-gray-600">
              Business listings will appear here once they're generated.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
*/

// locallead/Dental Clinic Website Template/src/app/component/Dashboard.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { BusinessCard } from "./BusinessCard";

/* -------------------------
   Types
------------------------- */
interface BusinessIndexItem {
  slug: string;
  name: string;
  category: string;
  city: string;
  rating?: number;
  review_count?: number;
  preview?: string;
}

/* -------------------------
   Dashboard Component
------------------------- */
export function Dashboard() {
  const [businesses, setBusinesses] = useState<BusinessIndexItem[]>([]);
  const [loading, setLoading] = useState(true);


  /* -------------------------
     Load dashboard index
  ------------------------- */
  useEffect(() => {
    fetch("/data/businesses/index.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load index.json");
        return res.json();
      })
      .then((data) => {
        setBusinesses(data.businesses || []);
      })
      .catch((err) => {
        console.error("Dashboard load error:", err);
        setBusinesses([]);
      })
      .finally(() => setLoading(false));
  }, []);

  /* -------------------------
     Actions
  ------------------------- */
  const handlePreview = (slug: string) => {
    window.open(`/preview/${slug}`, "_blank");
  };


  const handleDeploy = (slug: string) => {
    const repoUrl = "https://github.com/amankanz/locallead"; // change if needed
    const projectName = `locallead-${slug}`;

    const vercelUrl =
      `https://vercel.com/new` +
      `?repository-url=${encodeURIComponent(repoUrl)}` +
      `&project-name=${projectName}`;

    window.open(vercelUrl, "_blank");
  };

  /* -------------------------
     Render
  ------------------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-gray-900">
                LocalLead Preview
              </h1>
              <p className="text-xs text-gray-500">
                Preview & deploy local business websites
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Business Previews
          </h2>
          <p className="text-gray-600 text-lg">
            Select a business to preview and deploy its website
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16 text-gray-500">
            Loading businesses…
          </div>
        )}

        {/* Business Cards Grid */}
        {!loading && businesses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <BusinessCard
                key={business.slug}
                business={business}
                index={index}
                onPreview={() => handlePreview(business.slug)}
                onDeploy={() => handleDeploy(business.slug)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && businesses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Rocket className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No businesses yet
            </h3>
            <p className="text-gray-600">
              Business listings will appear here once they're generated.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

