import { motion } from "motion/react";
import { Star, Heart } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export const Testimonials = () => (
  <section className="py-20 md:py-24 bg-baby-blue/30">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Parents</h2>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] card-shadow relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-baby-pink rounded-2xl flex items-center justify-center">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <p className="text-slate-600 italic mb-6 md:mb-8 text-base md:text-lg">"{t.text}"</p>
            <div>
              <p className="font-bold text-slate-900">{t.author}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
