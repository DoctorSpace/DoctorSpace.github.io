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

const CONTEXTS: Contexts = {
  Belt: {
    title: "Пояс",
    category: "Belts",
    prefix: "Belt",
    path: "/images/Products/Belt",
    count: 1,
  },
  Choker: {
    title: "Чокер",
    category: "Chokers",
    prefix: "Choker",
    path: "/images/Products/Choker",
    count: 46,
  },
  Earring: {
    title: "Серьги",
    category: "Earrings",
    prefix: "Earring",
    path: "/images/Products/Earring",
    count: 33,
  },
  FeltBracelet: {
    title: "Фетровый браслет",
    category: "FeltBracelets",
    prefix: "FeltBracelet",
    path: "/images/Products/FeltBracelet",
    count: 31,
  },
  HairAccessory: {
    title: "Аксессуар для волос",
    category: "HairAccessorys",
    prefix: "HairAccessory",
    path: "/images/Products/HairAccessory",
    count: 23,
  },
  HardBracelet: {
    title: "Жёсткий браслет",
    category: "HardBracelets",
    prefix: "HardBracelet",
    path: "/images/Products/HardBracelet",
    count: 32,
  },
  Necklace: {
    title: "Колье",
    category: "Necklaces",
    prefix: "Necklace",
    path: "/images/Products/Necklace",
    count: 198,
  },
  Scarf: {
    title: "Платок",
    category: "Scarfs",
    prefix: "Scarf",
    path: "/images/Products/Scarf",
    count: 3,
  },
  SoftBracelet: {
    title: "Мягкий браслет",
    category: "SoftBracelets",
    prefix: "SoftBracelet",
    path: "/images/Products/SoftBracelet",
    count: 12,
  },
  Tiadem: {
    title: "Диадема",
    category: "Tiadems",
    prefix: "Tiadem",
    path: "/images/Products/Tiadem",
    count: 17,
  },
};

const pad = (num: number): string => num.toString().padStart(2, "0");

export const PRODUCTS_ITEMS: Product[] = Object.entries(CONTEXTS).flatMap(
  ([key, { title, category, prefix, path, count }]) =>
    Array.from({ length: count }, (_, index) => {
      const num = pad(index + 1);
      return {
        id: `${key}-${num}`,
        category,
        name: `${title} ${num}`,
        image: `${path}/${prefix}-${num}.jpg`,
      };
    })
);
