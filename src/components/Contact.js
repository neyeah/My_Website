import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    // Simulate form submission delay
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset(); // Reset the form fields
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false); // Stop loading regardless of success
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m always open to discussing new projects or opportunities to bring your visions to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content="arohchinenye895@gmail.com"
              href="mailto:arohchinenye895@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              content="+2349038006856"
              href="tel:+2349038006856"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              content="Abuja, Nigeria"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/arohchinenye895@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {!isSuccess ? (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg transition-colors ${
                    isSubmitting
                      ? 'bg-purple-400 text-white cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, content, href }) {
  const ContentWrapper = href ? 'a' : 'div';
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-start gap-4"
    >
      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        {React.createElement(
          ContentWrapper,
          {
            href: href || undefined,
            className: `text-gray-600 dark:text-gray-300 ${href ? 'hover:text-purple-600 dark:hover:text-purple-400' : ''}`
          },
          content
        )}
      </div>
    </motion.div>
  );
}
