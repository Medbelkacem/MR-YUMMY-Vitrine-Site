
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface MenuSection {
  title: string;
  id: string;
  items: MenuItem[];
}

export interface Offer {
  title: string;
  description: string;
  icon: string;
}
