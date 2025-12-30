const CONTEXTS = {
  Belt: {
    title: "Пояс",
    category: "Belts",
    context: require.context(
      "../images/Products/Belt",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  Choker: {
    title: "Чокер",
    category: "Chokers",
    context: require.context(
      "../images/Products/Choker",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  Earring: {
    title: "Серьги",
    category: "Earrings",
    context: require.context(
      "../images/Products/Earring",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  FeltBracelet: {
    title: "Фетровый браслет",
    category: "FeltBracelets",
    context: require.context(
      "../images/Products/FeltBracelet",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  HairAccessory: {
    title: "Аксессуар для волос",
    category: "HairAccessorys",
    context: require.context(
      "../images/Products/HairAccessory",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  HardBracelet: {
    title: "Жёсткий браслет",
    category: "HardBracelets",
    context: require.context(
      "../images/Products/HardBracelet",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  Necklace: {
    title: "Колье",
    category: "Necklaces",
    context: require.context(
      "../images/Products/Necklace",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  Scarf: {
    title: "Платок",
    category: "Scarfs",
    context: require.context(
      "../images/Products/Scarf",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  SoftBracelet: {
    title: "Мягкий браслет",
    category: "SoftBracelets",
    context: require.context(
      "../images/Products/SoftBracelet",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },

  Tiadem: {
    title: "Диадема",
    category: "Tiadems",
    context: require.context(
      "../images/Products/Tiadem",
      false,
      /\.(jpg|jpeg|png|webp)$/
    ),
  },
};

export const PRODUCTS_ITEMS = Object.entries(CONTEXTS).flatMap(
  ([key, { category, title, context }]) =>
    context.keys().map((file, index) => ({
      id: `${key}-${index + 1}`,
      category: category,
      name: `${title} ${index + 1}`,
      image: context(file),
    }))
);
