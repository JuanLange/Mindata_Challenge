export interface CardBase {
  variant: 'users' | 'profile' | 'product' | 'art';
}

export interface UsersCard extends CardBase {
  variant: 'users';
  title: string;
  description: string;
  users: {
    name: string;
    role: string;
    avatar: string;
  }[];
  totalStudents: number;
}

export interface ProfileCard extends CardBase {
  variant: 'profile';
  name: string;
  role: string;
  avatar: string;
  gradientStart: string;
  gradientEnd: string;
  button1: string;
  button2: string;
}

export interface ProductCard extends CardBase {
  variant: 'product';
  title: string;
  description: string;
  image: string;
  currentPrice: number;
  oldPrice: number;
  icons: string[];
}

export interface ArtCard extends CardBase {
  variant: 'art';
  title: string;
  description: string;
  image: string;
}

export type Card = UsersCard | ProfileCard | ProductCard | ArtCard;
