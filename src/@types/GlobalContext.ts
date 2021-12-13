export interface ItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
}

export interface CartProps {
  bag: ItemProps[];
  totalValue: number;
  addToBag: (item: ItemProps) => void;
  removeItem: (item: ItemProps) => void;
}
