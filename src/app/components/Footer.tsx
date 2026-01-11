import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">BrightSmile Dental</h3>
          <p className="text-gray-400 mb-6">San Francisco • Quality Dental Care</p>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-sm text-gray-400 mb-2">
              © {currentYear} BrightSmile Dental Clinic. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              Preview website generated for demonstration
              <Heart className="w-3 h-3 fill-red-500 text-red-500 inline-block" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
