// locallead/Dental Clinic Website Template/src/app/component/BusinessCard.tsx
/*
import { motion } from 'motion/react';
import { Star, ExternalLink, Rocket, MapPin } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  category: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  preview: string;
  slug: string;
}

interface BusinessCardProps {
  business: Business;
  index: number;
  onPreview: (id: number) => void;
  onDeploy: (id: number) => void;
}

export function BusinessCard({ business, index, onPreview, onDeploy }: BusinessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        {/* Business Name =/}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {business.name}
        </h3>

        {/* Category Badge =/}
        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-3">
          {business.category}
        </div>

        {/* Location =/}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
          <span className="text-sm">
            {business.city}, {business.state}
          </span>
        </div>

        {/* Rating =/}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-semibold text-gray-900 mr-1">
              {business.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-gray-500 text-sm">
            ({business.reviewCount} reviews)
          </span>
        </div>

        {/* Preview Text =/}
        <p className="text-gray-600 text-sm line-clamp-2 mb-6">
          {business.preview}
        </p>

        {/* Action Buttons =/}
        <div className="flex gap-3">
          {/* Preview Button =/}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPreview(business.id)}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Preview
          </motion.button>

          {/* Deploy Button =/}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onDeploy(business.id)}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium transition-all duration-200 group"
            title="Deploy this site to Vercel"
          >
            <Rocket className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
            <span className="ml-2 hidden sm:inline">Deploy</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
*/

// locallead/Dental Clinic Website Template/src/app/component/BusinessCard.tsx

import { motion } from "motion/react";
import { Star, ExternalLink, Rocket, MapPin } from "lucide-react";

/* -------------------------
   Types
------------------------- */
export interface BusinessIndexItem {
  slug: string;
  name: string;
  category: string;
  city: string;
  rating?: number;
  review_count?: number;
  preview?: string;
}

interface BusinessCardProps {
  business: BusinessIndexItem;
  index: number;
  onPreview: (slug: string) => void;
  onDeploy: (slug: string) => void;
}

/* -------------------------
   Component
------------------------- */
export function BusinessCard({
  business,
  index,
  onPreview,
  onDeploy,
}: BusinessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        {/* Business Name */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {business.name}
        </h3>

        {/* Category Badge */}
        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-3">
          {business.category}
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
          <span className="text-sm">{business.city}</span>
        </div>

        {/* Rating */}
        {typeof business.rating === "number" && (
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold text-gray-900 mr-1">
                {business.rating.toFixed(1)}
              </span>
            </div>
            {typeof business.review_count === "number" && (
              <span className="text-gray-500 text-sm">
                ({business.review_count} reviews)
              </span>
            )}
          </div>
        )}

        {/* Preview Text */}
        {business.preview && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-6">
            {business.preview}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Preview Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPreview(business.slug)}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Preview
          </motion.button>

          {/* Deploy Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onDeploy(business.slug)}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium transition-all duration-200 group"
            title="Deploy this site to Vercel"
          >
            <Rocket className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
            <span className="ml-2 hidden sm:inline">Deploy</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}


