import { motion } from "motion/react";
import { CheckCircle2, Star, Truck, ShoppingBag } from "lucide-react";

export const WhyChooseUs = () => (
  <section id="why-us" className="py-20 md:py-24 bg-baby-cream relative overflow-hidden" role="region" aria-labelledby="why-heading">
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] card-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <CheckCircle2 className="text-green-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Baby-Safe</h4>
            <p className="text-sm text-slate-600">High-quality, non-toxic products for your little one.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] card-shadow mt-6 md:mt-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Star className="text-blue-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Trusted</h4>
            <p className="text-sm text-slate-600">Recommended by thousands of happy parents.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] card-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Truck className="text-pink-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Quick Delivery</h4>
            <p className="text-sm text-slate-600">Same-day delivery available for urgent needs.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] card-shadow mt-6 md:mt-8">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <ShoppingBag className="text-purple-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">One-Stop</h4>
            <p className="text-sm text-slate-600">Everything from hospital kits to nursery decor.</p>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-1 lg:order-2"
      >
        <h2 id="why-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Why Parents Trust <span className="text-baby-rose">World Baby Kids</span></h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          We understand that being a new parent is both exciting and overwhelming. That's why we've dedicated ourselves to providing only the best, safest, and most essential products for your newborn.
        </p>
        <ul className="space-y-4">
          {["Affordable prices for premium quality", "Curated by parenting experts", "24/7 customer support for inquiries"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-6 h-6 bg-baby-pink rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-baby-rose" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

