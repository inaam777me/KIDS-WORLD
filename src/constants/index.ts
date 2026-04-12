import {
  Stethoscope,
  Milk,
  Shirt,
  Gift,
  Star,
} from "lucide-react";
import { Category, Product } from "../types";

export const CATEGORIES: Category[] = [
  {
    title: "Hospital Delivery Essentials",
    desc: "Maternity kits, diapers, baby blankets",
    iconName: "Stethoscope",
    bg: "bg-blue-50",
    img: "https://picsum.photos/seed/hospital/400/300",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Baby Groceries",
    desc: "Milk formula, baby food, feeding items",
    iconName: "Milk",
    bg: "bg-orange-50",
    img: "https://picsum.photos/seed/groceries/400/300",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Baby Clothing",
    desc: "Rompers, newborn sets, caps, socks",
    iconName: "Shirt",
    bg: "bg-pink-50",
    img: "https://picsum.photos/seed/clothing/400/300",
    color: "from-pink-400 to-pink-600"
  },
  {
    title: "Fancy & Gift Items",
    desc: "Toys, hampers, decorations",
    iconName: "Gift",
    bg: "bg-purple-50",
    img: "https://picsum.photos/seed/gifts/400/300",
    color: "from-purple-400 to-purple-600"
  }
];

export const FEATURES = [
  {
    title: "Baby-Safe",
    desc: "High-quality, non-toxic products for your little one.",
    icon: "CheckCircle2",
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    title: "Trusted",
    desc: "Recommended by thousands of happy parents.",
    icon: "Star",
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    title: "Quick Delivery",
    desc: "Same-day delivery available for urgent needs.",
    icon: "Truck",
    bg: "bg-pink-100",
    color: "text-pink-600"
  },
  {
    title: "One-Stop",
    desc: "Everything from hospital kits to nursery decor.",
    icon: "ShoppingBag",
    bg: "bg-purple-100",
    color: "text-purple-600"
  }
];

export const FEATURED_PRODUCTS: Product[] = [
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
    tag: undefined
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
    tag: undefined
  },
  { 
    name: "Newborn Gift Hamper", 
    price: "Rs. 12,000.00", 
    img: "https://picsum.photos/seed/hamper/400/400",
    desc: "Perfectly curated gift set for new arrivals.",
    rating: 4.9,
    reviews: 634,
    tag: "popular"
  }
];

export const TESTIMONIALS = [
  { 
    text: "Everything I needed for my baby in one place! The hospital kit was a lifesaver.", 
    author: "Sarah M.", 
    role: "New Mom" 
  },
  { 
    text: "The quality of the clothing is amazing. So soft and perfect for newborn skin.", 
    author: "Jessica L.", 
    role: "Mom of two" 
  },
  { 
    text: "Fast delivery and great customer service. Highly recommend Kids World!", 
    author: "Emily R.", 
    role: "First-time Mom" 
  }
];

export const CONTACT_INFO = {
  phone: "0776174260",
  whatsapp: "0720877431",
  whatsappUrl: "https://wa.me/94720877431",
  location: "NO.06, Beach Road, New Kattankudy 06, Kattankudy, Sri Lanka",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.568321683404!2d81.733333!3d7.683333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3af517f000000000%3A0x0!2zN8KwNDEnMDAuMCJOIDgxwrA0NCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1652345678901!5m2!1sen!2slk"
};

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Twitter", url: "#" }
];
