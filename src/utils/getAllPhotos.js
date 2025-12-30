import { ref, listAll, getDownloadURL } from "firebase/storage";
import { setCategory, setName } from "./setCategory";

import { storage } from "../firebase";

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const loadPhotoRefs = async (folderPath = "/") => {
  try {
    const folderRef = ref(storage, folderPath);
    if (!folderPath) return [];
    const allPhotosList = await listAll(folderRef);

    const currentPhotosList = allPhotosList.items.slice(1).map((item) => ({
      name: setName(item.name),
      category: setCategory(item.name),
      ref: item,
    }));

    return shuffleArray(currentPhotosList);
  } catch (error) {
    console.error("Ошибка при загрузке референсов фото:", error);
    return [];
  }
};

export const fetchPhotoURLs = async (photoRefs) => {
  try {
    const urls = await Promise.all(
      photoRefs.map((photoRef) => getDownloadURL(photoRef))
    );
    return urls;
  } catch (error) {
    console.error("Ошибка при загрузке URL фото:", error);
    return [];
  }
};
