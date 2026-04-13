import { Baby, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-white pt-20 md:pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-baby-pink rounded-full flex items-center justify-center">
              <Baby className="text-baby-rose w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900">World Baby Kids</span>
          </div>
          <p className="text-slate-500 leading-relaxed mb-8 text-sm md:text-base">
            Caring for your little one starts here. We provide premium newborn essentials for a happy, healthy start to life.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-baby-pink hover:text-baby-rose transition-all duration-300" aria-label={`Follow on social media ${i}`}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-500 text-sm md:text-base">
            <li><a href="#" className="hover:text-baby-rose transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Shop All</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Newborn Checklist</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Categories</h4>
          <ul className="space-y-4 text-slate-500 text-sm md:text-base">
            <li><a href="#" className="hover:text-baby-rose transition-colors">Hospital Kits</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Baby Clothing</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Groceries</a></li>
            <li><a href="#" className="hover:text-baby-rose transition-colors">Toys & Gifts</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
          <p className="text-slate-500 mb-6 text-sm md:text-base">Get parenting tips and special offers delivered to your inbox.</p>
          <div className="relative">
            <input type="email" placeholder="Your email" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-baby-pink transition-all text-sm md:text-base" />
            <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-3 md:px-4 rounded-xl text-xs md:text-sm font-bold hover:bg-slate-800 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
        <p>© 2026 World Baby Kids. All rights reserved.</p>
        <div className="flex gap-6 md:gap-8">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

