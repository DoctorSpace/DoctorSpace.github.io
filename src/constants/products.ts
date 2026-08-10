export interface Product {
  id: string;
  category: string;
  name: string;
  image: string;
}

interface ProductContext {
  title: string;
  category: string;
  count: number;
}

const CONTEXTS: Record<string, ProductContext> = {
  Belt: {
    title: "Пояс",
    category: "Belts",
    count: 1,
  },
  Choker: {
    title: "Чокер",
    category: "Chokers",
    count: 46,
  },
  Earring: {
    title: "Серьги",
    category: "Earrings",
    count: 33,
  },
  FeltBracelet: {
    title: "Фетровый браслет",
    category: "FeltBracelets",
    count: 31,
  },
  HairAccessory: {
    title: "Аксессуар для волос",
    category: "HairAccessorys",
    count: 23,
  },
  HardBracelet: {
    title: "Жёсткий браслет",
    category: "HardBracelets",
    count: 32,
  },
  Necklace: {
    title: "Колье",
    category: "Necklaces",
    count: 198,
  },
  Scarf: {
    title: "Платок",
    category: "Scarfs",
    count: 3,
  },
  SoftBracelet: {
    title: "Мягкий браслет",
    category: "SoftBracelets",
    count: 12,
  },
  Tiadem: {
    title: "Диадема",
    category: "Tiadems",
    count: 17,
  },
};

export const PRODUCTS_ITEMS: Product[] = Object.entries(CONTEXTS).flatMap(
  ([key, { title, category, count }]) =>
    Array.from({ length: count }, (_, index) => {
      const num = String(index + 1).padStart(2, "0");
      return {
        id: `${key}-${num}`,
        category,
        name: `${title} ${num}`,
        image: `/images/Products/${key}/${key}-${num}.jpg`,
      };
    })
);
