export type MenuItem = {
    categoryName: string;
    categoryDescription?: string;
    items: {
      itemName: string;
      itemDescription: string;
      itemPrices: {
        price: string;
        size: string;
      }[];
    }[];
  };