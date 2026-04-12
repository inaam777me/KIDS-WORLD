import { motion } from "motion/react";
import { useState } from "react";
import { 
  ShoppingBag, 
  Phone, 
  MessageCircle, 
  Heart, 
  Truck, 
  Gift, 
  Star, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  CheckCircle2,
  Baby,
  Stethoscope,
  Milk,
  Shirt,
  Menu,
  X,
  Search,
  Sparkles,
  Zap
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-baby-pink to-baby-rose rounded-full flex items-center justify-center animation-pulse">
            <Baby className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-slate-900">Kids World</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#categories" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Categories</a>
          <a href="#featured" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Products</a>
          <a href="#why-us" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Why Us</a>
          <a href="#contact" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all duration-300 text-slate-600">
            <Search className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-r from-baby-rose to-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-rose-200/50 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 space-y-4"
        >
          <a href="#categories" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Categories</a>
          <a href="#featured" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#why-us" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="w-full bg-gradient-to-r from-baby-rose to-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Shop Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
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

const Categories = () => {
  const categories = [
    {
      title: "Hospital Delivery Essentials",
      desc: "Maternity kits, diapers, baby blankets",
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
      img: "https://picsum.photos/seed/hospital/400/300",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Baby Groceries",
      desc: "Milk formula, baby food, feeding items",
      icon: <Milk className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-50",
      img: "https://picsum.photos/seed/groceries/400/300",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Baby Clothing",
      desc: "Rompers, newborn sets, caps, socks",
      icon: <Shirt className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-50",
      img: "https://picsum.photos/seed/clothing/400/300",
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Fancy & Gift Items",
      desc: "Toys, hampers, decorations",
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50",
      img: "https://picsum.photos/seed/gifts/400/300",
      color: "from-purple-400 to-purple-600"
    }
  ];

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
          {categories.map((cat, i) => (
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
                    {cat.icon}
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

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 bg-baby-cream relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[32px] card-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="text-green-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Baby-Safe</h4>
            <p className="text-sm text-slate-600">High-quality, non-toxic products for your little one.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] card-shadow mt-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Star className="text-blue-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Trusted</h4>
            <p className="text-sm text-slate-600">Recommended by thousands of happy parents.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] card-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <Truck className="text-pink-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Quick Delivery</h4>
            <p className="text-sm text-slate-600">Same-day delivery available for urgent needs.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] card-shadow mt-8">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag className="text-purple-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">One-Stop</h4>
            <p className="text-sm text-slate-600">Everything from hospital kits to nursery decor.</p>
          </div>
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Why Parents Trust <span className="text-baby-rose">Kids World</span></h2>
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
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { 
      name: "Baby Cheramy Essentials Set", 
      price: "Rs. 1,250.00", 
      img: "https://picsum.photos/seed/cheramy/400/400",
      desc: "Trusted protection with soap, cologne, and oil.",
      rating: 4.8,
      reviews: 342,
      tag: "bestseller"
    },
    { 
      name: "Marvel Baby Taped Diapers", 
      price: "Rs. 2,450.00", 
      img: "https://picsum.photos/seed/diapers/400/400",
      desc: "Ultra-absorbent layers with 12-hour protection.",
      rating: 4.9,
      reviews: 521,
      tag: "trending"
    },
    { 
      name: "DBWL-01 Baby Walker", 
      price: "Rs. 8,900.00", 
      img: "https://picsum.photos/seed/walker/400/400",
      desc: "Safe and fun walker with musical tray.",
      rating: 4.7,
      reviews: 218,
      tag: null
    },
    { 
      name: "Ultimate Hospital Kit", 
      price: "Rs. 15,500.00", 
      img: "https://picsum.photos/seed/kit/400/400",
      desc: "Complete set for your hospital delivery stay.",
      rating: 4.9,
      reviews: 456,
      tag: "essential"
    },
    { 
      name: "Organic Cotton Romper", 
      price: "Rs. 1,850.00", 
      img: "https://picsum.photos/seed/romper/400/400",
      desc: "Soft, breathable cotton for newborn skin.",
      rating: 4.8,
      reviews: 389,
      tag: null
    },
    { 
      name: "Newborn Gift Hamper", 
      price: "Rs. 12,000.00", 
      img: "https://picsum.photos/seed/hamper/400/400",
      desc: "Perfectly curated gift set for new arrivals.",
      rating: 4.9,
      reviews: 634,
      tag: "popular"
    },
  ];

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
            View All Products <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {products.map((prod, i) => (
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

const Testimonials = () => (
  <section className="py-24 bg-baby-blue/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Parents</h2>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { text: "Everything I needed for my baby in one place! The hospital kit was a lifesaver.", author: "Sarah M.", role: "New Mom" },
          { text: "The quality of the clothing is amazing. So soft and perfect for newborn skin.", author: "Jessica L.", role: "Mom of two" },
          { text: "Fast delivery and great customer service. Highly recommend Kids World!", author: "Emily R.", role: "First-time Mom" }
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] card-shadow relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-baby-pink rounded-2xl flex items-center justify-center">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <p className="text-slate-600 italic mb-8 text-lg">"{t.text}"</p>
            <div>
              <p className="font-bold text-slate-900">{t.author}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SpecialServices = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Special Services for New Parents</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Stethoscope className="w-8 h-8 text-baby-pink" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Hospital Delivery Packs</h4>
                  <p className="text-slate-400">Ready-made kits with everything you need for your hospital stay, delivered right to your door.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Gift className="w-8 h-8 text-baby-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Custom Gift Wrapping</h4>
                  <p className="text-slate-400">Beautiful, baby-themed gift wrapping for all your newborn presents and hampers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/service/600/600" 
              alt="Gift wrapping" 
              className="rounded-[40px] w-full card-shadow"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-baby-rose/20 blur-[120px] rounded-full" />
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: {name?: string; email?: string; message?: string} = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
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
                <a href="tel:0776174260" className="text-lg md:text-xl font-bold text-slate-900 hover:text-baby-rose transition-colors">0776174260</a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-2xl flex items-center justify-center card-shadow shrink-0">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">WhatsApp</p>
                <a href="https://wa.me/94720877431" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-slate-900 hover:text-baby-rose transition-colors">0720877431</a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center card-shadow shrink-0">
                <MapPin className="text-baby-sky w-6 h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Visit Us</p>
                <p className="text-lg md:text-xl font-bold text-slate-900">NO.06, Beach Road, New Kattankudy 06, Kattankudy, Sri Lanka</p>
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

const MapSection = () => (
  <section className="h-[500px] w-full bg-slate-200 relative">
    {/* Placeholder for Google Map */}
    <div className="absolute inset-0 flex items-center justify-center bg-baby-blue/20">
      <div className="text-center">
        <MapPin className="w-12 h-12 text-baby-rose mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900">Find Us Here</h3>
        <p className="text-slate-600">NO.06, Beach Road, New Kattankudy 06, Kattankudy, Sri Lanka</p>
      </div>
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.568321683404!2d81.733333!3d7.683333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3af517f000000000%3A0x0!2zN8KwNDEnMDAuMCJOIDgxwrA0NCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1652345678901!5m2!1sen!2slk" 
      className="w-full h-full border-0 grayscale opacity-60"
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-baby-pink rounded-full flex items-center justify-center">
              <Baby className="text-baby-rose w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900">Kids World</span>
          </div>
          <p className="text-slate-500 leading-relaxed mb-8">
            Caring for your little one starts here. We provide premium newborn essentials for a happy, healthy start to life.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-baby-pink hover:text-baby-rose transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#" className="hover:text-baby-rose transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Shop All</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Newborn Checklist</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Categories</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#" className="hover:text-baby-rose transition-colors">Hospital Kits</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Baby Clothing</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Groceries</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Toys & Gifts</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
          <p className="text-slate-500 mb-6">Get parenting tips and special offers delivered to your inbox.</p>
          <div className="relative">
            <input type="email" placeholder="Your email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-baby-pink transition-all" />
            <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-top border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm">© 2026 Kids World. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-baby-pink selection:text-baby-rose">
      <Navbar />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <SpecialServices />
      <Contact />
      <MapSection />
      <Footer />
      
      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href="https://wa.me/94720877431" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
