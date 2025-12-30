export const translations = {
  Колье: "necklace",
  "Браслет жетский": "bracelet_hard",
  "Браслет мягкий": "bracelet_soft",
  "Браслет фетровый": "bracelet_fetrowy",
  Диадема: "diadem",
  Платок: "plate",
  Пояс: "belt",
  Серьги: "earrings",
  "Украшение на волосы": "hair_accessory",
  Чокер: "choker",
};

export const setCategory = (filename) => {
  const nameWithoutExtension = filename.replace(/\s\(.*\)\.jpg$/, "").trim();
  const normalizedFilename = nameWithoutExtension.toLowerCase();
  const result = Object.keys(translations).find(
    (key) => key.toLowerCase() === normalizedFilename
  );

  return result ? translations[result] : "Unknown";
};

export const setName = (filename) => {
  const nameWithoutExtension = filename.replace(/\s\(.*\)\.jpg$/, "").trim();

  return nameWithoutExtension;
};
