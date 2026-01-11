// Dental Clinic Website Template/src/app/components/Reviews.tsx
/*
import { Star, User, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

interface ReviewsProps {
  hasReviews?: boolean;
}

export function Reviews({ hasReviews = true }: ReviewsProps) {
  const reviews: Review[] = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent service! Dr. Smith and the team made me feel comfortable throughout my entire visit. Highly recommend BrightSmile for anyone looking for quality dental care.',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'The staff is incredibly professional and friendly. The clinic is modern and clean. My teeth cleaning was thorough and painless. Will definitely be coming back!',
      date: '1 month ago',
    },
    {
      name: 'Emily Rodriguez',
      rating: 4,
      text: 'Great experience overall. The waiting time was minimal and the dentist explained everything clearly. Very satisfied with the cosmetic work done on my teeth.',
      date: '1 month ago',
    },
  ];

  const placeholderReviews: Review[] = [
    {
      name: 'Placeholder Review',
      rating: 0,
      text: 'No reviews available yet. Be the first to leave a review!',
      date: 'N/A',
    },
  ];

  const displayReviews = hasReviews ? reviews : placeholderReviews;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real experiences from real patients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  !hasReviews ? 'border-2 border-dashed border-gray-300' : ''
                }`}
              >
                {/* Header =/}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      hasReviews ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className={`w-6 h-6 ${
                          hasReviews ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      )}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        hasReviews ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>

                {/* Rating =/}
                <div className="mb-3">
                  {hasReviews ? (
                    renderStars(review.rating)
                  ) : (
                    <AlertCircle className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                {/* Review Text =/}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
*/


// Dental Clinic Website Template/src/app/components/Reviews.tsx
import { Star, User, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  author: string;
  rating: number;
  text: string;
  relative_time?: string;
  avatar?: string;
}

interface ReviewsProps {
  reviews?: Review[];
}

const placeholderReviews: Review[] = [
  {
    author: 'No Reviews Yet',
    rating: 0,
    text: 'This business has not received reviews yet.',
    relative_time: 'N/A',
  },
];

export function Reviews({ reviews }: ReviewsProps) {
  const hasReviews = Boolean(reviews && reviews.length > 0);
  const displayReviews = hasReviews ? reviews! : placeholderReviews;

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real experiences from real patients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  !hasReviews ? 'border-2 border-dashed border-gray-300' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      hasReviews ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className={`w-6 h-6 ${
                          hasReviews ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      )}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        hasReviews ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {review.author}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {review.relative_time ?? 'Recently'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-3">
                  {hasReviews && review.rating > 0 ? (
                    renderStars(review.rating)
                  ) : (
                    <AlertCircle className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
