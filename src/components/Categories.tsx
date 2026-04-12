import { motion } from "motion/react";
import { Stethoscope, Milk, Shirt, Gift } from "lucide-react";
import { CATEGORIES } from "../constants";

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-8 h-8 text-blue-500" />,
    Milk: <Milk className="w-8 h-8 text-orange-500" />,
    Shirt: <Shirt className="w-8 h-8 text-pink-500" />,
    Gift: <Gift className="w-8 h-8 text-purple-500" />
  };
  return iconMap[iconName] || null;
};

export const Categories = () => {
  return (
    <section id="categories" className="py-20 md:py-24 bg-white" role="region" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="categories-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">Shop by Category</h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Everything you need for your baby's journey, thoughtfully curated in easy-to-browse categories.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative h-56 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6 card-shadow group-hover:shadow-xl group-hover:shadow-slate-900/10 transition-all duration-300">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 md:p-6">
                  <div className={`p-3 rounded-2xl ${cat.bg} mb-2 bg-white/90`}>
                    {getIconComponent(cat.iconName)}
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-baby-rose transition-colors duration-300">{cat.title}</h3>
              <p className="text-slate-600 text-sm md:text-base">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
