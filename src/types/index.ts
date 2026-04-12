export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface Product {
  name: string;
  price: string;
  img: string;
  desc: string;
  rating: number;
  reviews: number;
  tag?: string;
}

export interface Category {
  title: string;
  desc: string;
  iconName: string;
  bg: string;
  img: string;
  color: string;
}
