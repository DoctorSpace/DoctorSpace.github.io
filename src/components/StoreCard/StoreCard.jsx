import React, { useEffect, useState } from "react";
import ViewImg from "../UI/ViewImg/ViewImg";
import { loadPhotoRefs, fetchPhotoURLs } from "../../utils/getAllPhotos";
import Card from "../Card/Card";

export const StoreCard = ({ data }) => {
  const [photoData, setPhotoData] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [offset, setOffset] = useState(10);
  const [batchSize] = useState(10);
  const [loading, setLoading] = useState(false);

  const [infoPostView, setInfoPostView] = useState("");
  const [imgPostView, setImgPostView] = useState(false);

  // useEffect(() => {
  //   setVisiblePhotos(data);
  // }, [data]);

  useEffect(() => {
    const loadAllPhotos = async () => {
      setLoading(true);

      const refs = await loadPhotoRefs("/");

      const storedPhotoData = localStorage.getItem("photoData");
      const parsedPhotoData = storedPhotoData
        ? JSON.parse(storedPhotoData)
        : [];

      if (refs.length === parsedPhotoData.length) {
        setPhotoData(parsedPhotoData);
        setVisiblePhotos(parsedPhotoData.slice(0, batchSize));
        setLoading(false);
        return;
      }

      const urls = await fetchPhotoURLs(refs.map((item) => item.ref));

      const allPhotoData = refs.map((item, index) => ({
        name: item.name,
        category: item.category,
        url: urls[index],
      }));

      setPhotoData(allPhotoData);
      setVisiblePhotos(allPhotoData.slice(0, batchSize));

      localStorage.setItem("photoData", JSON.stringify(allPhotoData));

      setLoading(false);
    };

    loadAllPhotos();
    //eslint-disable-next-line
  }, []);

  const loadMorePhotos = () => {
    const nextOffset = offset + batchSize;
    if (nextOffset >= photoData.length) return;

    setVisiblePhotos((prev) => [
      ...prev,
      ...photoData.slice(offset, nextOffset),
    ]);
    setOffset(nextOffset);
  };

  return (
    <>
      <div className="store__container-posts-card">
        {loading && <div>Загрузка...</div>}
        {visiblePhotos.map((post, index) => (
          <Card
            post={post}
            openView={(post) => {
              setInfoPostView(post);
              setImgPostView(true);
            }}
            key={index}
          />
        ))}
      </div>

      <ViewImg
        visible={imgPostView}
        setVisible={setImgPostView}
        data={infoPostView}
      />

      <div className="store__batton">
        <button className="Btn-CardLoad" onClick={loadMorePhotos}>
          Загрузить ещё
        </button>
      </div>
    </>
  );
};
