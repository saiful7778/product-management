export interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  category: { value: string; label: string };
  status: { value: string; label: string };
}

export type FavoriteProductType = ProductType;
