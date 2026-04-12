import { motion } from "motion/react";
import { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { FEATURED_PRODUCTS } from "../constants";

export const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="featured" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">Featured Essentials</h2>
            <p className="text-slate-600 text-base md:text-lg">Our most-loved products for your little one's first months.</p>
          </div>
          <button className="text-baby-rose font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
            View All Products <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {FEATURED_PRODUCTS.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredProduct(i)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group cursor-pointer h-full flex flex-col"
            >
              <div className="relative aspect-square rounded-2xl md:rounded-[32px] overflow-hidden bg-slate-100 mb-4 md:mb-6 card-shadow group-hover:card-shadow transition-all duration-300">
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4">
                  {prod.tag && (
                    <span className="px-3 py-1 bg-baby-rose text-white text-xs font-bold rounded-full">
                      {prod.tag.toUpperCase()}
                    </span>
                  )}
                  <button 
                    className="bg-white p-3 md:p-4 rounded-2xl shadow-xl hover:bg-baby-pink transition-colors duration-300"
                    aria-label={`Add ${prod.name} to cart`}
                  >
                    <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 line-clamp-2">{prod.name}</h3>
              <p className="text-slate-500 text-sm mb-2 md:mb-3 line-clamp-2">{prod.desc}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      className={`w-4 h-4 ${j < Math.floor(prod.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-slate-600 font-semibold">({prod.reviews})</span>
              </div>

              <p className="text-baby-rose font-bold text-lg md:text-xl mt-auto">{prod.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
