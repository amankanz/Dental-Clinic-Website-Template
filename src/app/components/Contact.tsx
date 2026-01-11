// Dental Clinic Website Template/src/app/components/Contact.tsx
/*
import { Phone, Mail, MessageCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactInfo {
  phone?: string;
  whatsapp?: string;
  email?: string;
}

interface ContactProps {
  contactInfo?: ContactInfo;
}

export function Contact({ contactInfo }: ContactProps) {
  const hasPhone = contactInfo?.phone;
  const hasWhatsApp = contactInfo?.whatsapp;
  const hasEmail = contactInfo?.email;
  const hasAnyContact = hasPhone || hasWhatsApp || hasEmail;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Book your appointment or ask us any questions
          </p>

          <div className="max-w-3xl mx-auto">
            {hasAnyContact ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone =/}
                {hasPhone && (
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                      <Phone className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 text-sm">
                      {contactInfo.phone || '(555) 123-4567'}
                    </p>
                  </motion.a>
                )}

                {/* WhatsApp =/}
                {hasWhatsApp && (
                  <motion.a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
                  >
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors duration-200">
                      <MessageCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">
                      {contactInfo.whatsapp || '+1 555 123 4567'}
                    </p>
                  </motion.a>
                )}

                {/* Email =/}
                {hasEmail && (
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 group"
                  >
                    <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors duration-200">
                      <Mail className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm break-all">
                      {contactInfo.email || 'info@brightsmile.com'}
                    </p>
                  </motion.a>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-2 border-dashed border-gray-300">
                <div className="flex flex-col items-center justify-center text-center">
                  <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Contact Information Not Available
                  </h3>
                  <p className="text-gray-600">
                    This clinic has not yet added their contact details
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
*/

// Dental Clinic Website Template/src/app/components/Contact.tsx
import { Phone, Mail, MessageCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactInfo {
  phone?: string | null;
  whatsapp?: string | null;
  email?: string | null;
}

interface ContactProps {
  contactInfo?: ContactInfo;
}

export function Contact({ contactInfo }: ContactProps) {
  const hasPhone = Boolean(contactInfo?.phone?.trim());
  const hasWhatsApp = Boolean(contactInfo?.whatsapp?.trim());
  const hasEmail = Boolean(contactInfo?.email?.trim());
  const hasAnyContact = hasPhone || hasWhatsApp || hasEmail;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Book your appointment or ask us any questions
          </p>

          <div className="max-w-3xl mx-auto">
            {hasAnyContact ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hasPhone && (
                  <motion.a
                    href={`tel:${contactInfo!.phone}`}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <Phone className="w-7 h-7 text-blue-600 mb-4" />
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-sm text-gray-600">
                      {contactInfo!.phone}
                    </p>
                  </motion.a>
                )}

                {hasWhatsApp && (
                  <motion.a
                    href={`https://wa.me/${contactInfo!.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <MessageCircle className="w-7 h-7 text-green-600 mb-4" />
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-sm text-gray-600">
                      {contactInfo!.whatsapp}
                    </p>
                  </motion.a>
                )}

                {hasEmail && (
                  <motion.a
                    href={`mailto:${contactInfo!.email}`}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <Mail className="w-7 h-7 text-purple-600 mb-4" />
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-600 break-all">
                      {contactInfo!.email}
                    </p>
                  </motion.a>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-10 border-2 border-dashed border-gray-300 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">
                  Contact Information Not Available
                </h3>
                <p className="text-gray-600">
                  This business has not yet added their contact details
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
