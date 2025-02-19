// Interfaz base para todas las tarjetas
export interface CardBase {
  variant: 'users' | 'profile' | 'product' | 'art';
}

// Props específicos para la tarjeta de usuarios
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

// Props específicos para la tarjeta de perfil
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

// Props específicos para la tarjeta de producto
export interface ProductCard extends CardBase {
  variant: 'product';
  title: string;
  description: string;
  image: string;
  currentPrice: number;
  oldPrice: number;
  icons: string[];
}

// Props específicos para la tarjeta de arte
export interface ArtCard extends CardBase {
  variant: 'art';
  title: string;
  description: string;
  image: string;
}

// Tipo unión que representa todos los tipos posibles de tarjeta
export type Card = UsersCard | ProfileCard | ProductCard | ArtCard;
