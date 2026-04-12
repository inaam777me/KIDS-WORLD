import { motion } from "motion/react";
import { Stethoscope, Gift } from "lucide-react";

export const SpecialServices = () => (
  <section className="py-20 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="bg-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-20 text-white relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Special Services for New Parents</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-baby-pink" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Hospital Delivery Packs</h4>
                  <p className="text-slate-400 text-sm md:text-base">Ready-made kits with everything you need for your hospital stay, delivered right to your door.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 md:w-8 md:h-8 text-baby-blue" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Custom Gift Wrapping</h4>
                  <p className="text-slate-400 text-sm md:text-base">Beautiful, baby-themed gift wrapping for all your newborn presents and hampers.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/service/600/600" 
              alt="Gift wrapping service showcase" 
              className="rounded-[32px] md:rounded-[40px] w-full card-shadow"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-baby-rose/20 blur-[120px] rounded-full" />
      </div>
    </div>
  </section>
);
