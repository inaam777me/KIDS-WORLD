import { motion } from "motion/react";
import { MessageCircle, ChevronRight, Sparkles } from "lucide-react";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" role="banner">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/baby-hero/1920/1080" 
        alt="Beautiful newborn baby in crib" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-baby-cream/50 via-baby-cream to-baby-cream" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-baby-pink text-baby-rose text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Caring for Your Little One Starts Here</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6"
        >
          Everything Your <span className="bg-gradient-to-r from-baby-rose to-pink-500 bg-clip-text text-transparent">Newborn</span> Needs
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed"
        >
          Complete baby delivery kits, groceries, clothing, and adorable essentials in one place. We make parenthood easier, one product at a time.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
        >
          <button 
            className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 group"
            aria-label="Shop now and browse our products"
          >
            Shop Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            className="bg-white text-slate-900 border-2 border-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300"
            aria-label="Contact us for inquiries"
          >
            Contact Us
          </button>

          <button 
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fa855] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-300/30 hover:shadow-green-300/50"
            aria-label="Order via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" /> 
            <span className="hidden sm:inline">Order via WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white card-shadow aspect-[4/5]">
          <img 
            src="/367489ca-c0fb-4e28-872c-b5288a83a70e - Edited.jpg" 
            alt="Kids World Baby Boutique Shop Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-baby-pink rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-baby-blue rounded-full blur-3xl opacity-60 -z-10" />
      </motion.div>
    </div>
  </section>
);
