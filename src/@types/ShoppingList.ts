interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
}

export interface ItemProps {
  item: ProductCardProps;
}
