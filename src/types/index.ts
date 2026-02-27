export interface Product {
  id: string;
  category: string;
  name: string;
  image: string;
}

export interface ProductContext {
  title: string;
  category: string;
  prefix: string;
  path: string;
  count: number;
}

export interface Contexts {
  [key: string]: ProductContext;
}
