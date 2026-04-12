import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { FormData, FormErrors } from "../types";

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-baby-cream" role="region" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Get in Touch</h2>
          <p className="text-lg text-slate-600 mb-10 md:mb-12">Have questions about our products? We're here to help you every step of the way.</p>
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center card-shadow shrink-0">
                <Phone className="text-baby-rose w-6 h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Call Us</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg md:text-xl font-bold text-slate-900 hover:text-baby-rose transition-colors">{CONTACT_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-2xl flex items-center justify-center card-shadow shrink-0">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">WhatsApp</p>
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-slate-900 hover:text-baby-rose transition-colors">{CONTACT_INFO.whatsapp}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center card-shadow shrink-0">
                <MapPin className="text-baby-sky w-6 h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Visit Us</p>
                <p className="text-lg md:text-xl font-bold text-slate-900">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-10 lg:p-12 rounded-[32px] md:rounded-[48px] card-shadow"
        >
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3"
            >
              <CheckCircle2 className="text-green-600 w-5 h-5" />
              <p className="text-green-700 font-semibold">Message sent successfully!</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-700 block">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-slate-50 border-2 transition-all duration-300 focus:outline-none ${
                    errors.name ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-100 focus:ring-2 focus:ring-baby-pink'
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700 block">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-slate-50 border-2 transition-all duration-300 focus:outline-none ${
                    errors.email ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-100 focus:ring-2 focus:ring-baby-pink'
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 block">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={4} 
                placeholder="How can we help you?" 
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-slate-50 border-2 transition-all duration-300 focus:outline-none resize-none ${
                  errors.message ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-100 focus:ring-2 focus:ring-baby-pink'
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && <p id="message-error" className="text-sm text-red-500">{errors.message}</p>}
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-baby-rose to-pink-400 text-white py-4 md:py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-rose-200/50 transition-all duration-300 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
