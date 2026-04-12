import { motion } from "motion/react";
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
  Shirt
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3 card-shadow">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-baby-pink rounded-full flex items-center justify-center">
          <Baby className="text-baby-rose w-6 h-6" />
        </div>
        <span className="text-xl font-display font-bold text-slate-900">Kids World</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#categories" className="hover:text-baby-rose transition-colors">Categories</a>
        <a href="#featured" className="hover:text-baby-rose transition-colors">Products</a>
        <a href="#why-us" className="hover:text-baby-rose transition-colors">Why Us</a>
        <a href="#contact" className="hover:text-baby-rose transition-colors">Contact</a>
      </div>
      <button className="bg-baby-rose text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-rose-400 transition-all shadow-lg shadow-rose-200/50">
        Shop Now
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/baby-hero/1920/1080" 
        alt="Newborn baby" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-baby-cream/50 via-baby-cream to-baby-cream" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-baby-pink text-baby-rose text-sm font-semibold mb-6">
          <Heart className="w-4 h-4 fill-current" />
          <span>Caring for Your Little One Starts Here</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
          Everything Your <span className="text-baby-rose">Newborn</span> Needs – From Hospital to Home
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
          Complete baby delivery kits, groceries, clothing, and adorable essentials in one place. We make parenthood a little easier.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all group">
            Shop Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
            Contact Us
          </button>
          <button className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-green-200">
            <MessageCircle className="w-5 h-5" /> Order via WhatsApp
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white card-shadow aspect-[4/5]">
          <img 
            src="../367489ca-c0fb-4e28-872c-b5288a83a70e - Edited.jpg" 
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
      img: "https://picsum.photos/seed/hospital/400/300"
    },
    {
      title: "Baby Groceries",
      desc: "Milk formula, baby food, feeding items",
      icon: <Milk className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-50",
      img: "https://picsum.photos/seed/groceries/400/300"
    },
    {
      title: "Baby Clothing",
      desc: "Rompers, newborn sets, caps, socks",
      icon: <Shirt className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-50",
      img: "https://picsum.photos/seed/clothing/400/300"
    },
    {
      title: "Fancy & Gift Items",
      desc: "Toys, hampers, decorations",
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50",
      img: "https://picsum.photos/seed/gifts/400/300"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Shop by Category</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything you need for your baby's journey, thoughtfully curated in easy-to-browse categories.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 card-shadow">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className={`p-3 rounded-2xl ${cat.bg} mb-2`}>
                    {cat.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-slate-600 text-sm">{cat.desc}</p>
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
  const products = [
    { 
      name: "Baby Cheramy Essentials Set", 
      price: "Rs. 1,250.00", 
      img: "https://picsum.photos/seed/cheramy/400/400",
      desc: "Trusted protection with soap, cologne, and oil."
    },
    { 
      name: "Marvel Baby Taped Diapers", 
      price: "Rs. 2,450.00", 
      img: "https://picsum.photos/seed/diapers/400/400",
      desc: "Ultra-absorbent layers with 12-hour protection."
    },
    { 
      name: "DBWL-01 Baby Walker", 
      price: "Rs. 8,900.00", 
      img: "https://daxer.lk/wp-content/uploads/2023/12/DBWL-01-Baby-Walker-300x300.jpg",
      desc: "Safe and fun walker with musical tray."
    },
    { 
      name: "Ultimate Hospital Kit", 
      price: "Rs. 15,500.00", 
      img: "https://picsum.photos/seed/kit/400/400",
      desc: "Complete set for your hospital delivery stay."
    },
    { 
      name: "Organic Cotton Romper", 
      price: "Rs. 1,850.00", 
      img: "https://picsum.photos/seed/romper/400/400",
      desc: "Soft, breathable cotton for newborn skin."
    },
    { 
      name: "Newborn Gift Hamper", 
      price: "Rs. 12,000.00", 
      img: "https://picsum.photos/seed/hamper/400/400",
      desc: "Perfectly curated gift set for new arrivals."
    },
  ];

  return (
    <section id="featured" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Essentials</h2>
            <p className="text-slate-600">Our most-loved products for your little one's first months.</p>
          </div>
          <button className="text-baby-rose font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Products <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden bg-slate-100 mb-6 card-shadow">
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 bg-white p-4 rounded-2xl shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ShoppingBag className="w-6 h-6 text-slate-900" />
                </button>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{prod.name}</h3>
              <p className="text-slate-500 text-sm mb-2">{prod.desc}</p>
              <p className="text-baby-rose font-bold text-lg">{prod.price}</p>
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

const Contact = () => (
  <section id="contact" className="py-24 bg-baby-cream">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Get in Touch</h2>
        <p className="text-lg text-slate-600 mb-12">Have questions about our products or need help with an order? We're here to help you every step of the way.</p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center card-shadow">
              <Phone className="text-baby-rose w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Call Us</p>
              <p className="text-xl font-bold text-slate-900">0776174260</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center card-shadow">
              <MessageCircle className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">WhatsApp</p>
              <p className="text-xl font-bold text-slate-900">0720877431</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center card-shadow">
              <MapPin className="text-baby-sky w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Visit Us</p>
              <p className="text-xl font-bold text-slate-900">NO.06, Beach Road, New Kattankudy 06, Kattankudy, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-10 md:p-12 rounded-[48px] card-shadow">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-baby-pink outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-baby-pink outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Message</label>
            <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-baby-pink outline-none transition-all resize-none"></textarea>
          </div>
          <button className="w-full bg-baby-rose text-white py-5 rounded-2xl font-bold text-lg hover:bg-rose-400 transition-all shadow-lg shadow-rose-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

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
