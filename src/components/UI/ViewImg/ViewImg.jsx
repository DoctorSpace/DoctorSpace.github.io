import { Link } from "react-router-dom";

const ViewImg = ({ visible, closeView, data }) => {
  if (!data) return;

  const rootClasses = ["ViewImg"];

  if (visible) {
    rootClasses.push("active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={closeView}>
      <div className="ViewImg__content" onClick={(e) => e.stopPropagation()}>
        <div id="dropFile" for="image_uploads" className="ViewImg__content-img">
          <img src={data?.image} alt="something" />
        </div>

        <button className="ViewImg__content-buttonClose" onClick={closeView}>
          ←
        </button>

        <p>{data?.name}</p>

        <Link to="/Contact" className="ViewImg__content-button">
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default ViewImg;
