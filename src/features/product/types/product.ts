
export interface IProduct {
  productId: string;
  name: string;
  description?: string;
  category?: string;
  isActive: boolean;
  createdAt: Date
}


export interface IProductForm {
  name: string;
  description: string
  category: string
}

export type IProductUpdate = Partial<IProductForm>;