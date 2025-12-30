import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const uploadPicture = (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
};

export const getPictureUrl = (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, file.name);

  getDownloadURL(storageRef)
    .then((url) => {
      return url;
    })
    .catch((error) => {
      return error;
    });
};
