export interface Product {
  collectionId: string;
  collectionName: string;
  cost: number;
  created: string;
  description: string;
  id: string;
  img: string;
  name: string;
  tmb: string;
  updated: string;
}

export interface ProductForm extends Omit<Product, 'id' | 'collectionId' | 'collectionName' | 'created' | 'updated'> {
  id?: string;
}