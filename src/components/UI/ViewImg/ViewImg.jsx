import React from "react";
import { Link } from "react-router-dom";

const ViewImg = ({ visible, setVisible, data }) => {
  const rootClasses = ["ViewImg"];

  if (visible) {
    rootClasses.push("active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="ViewImg__content" onClick={(e) => e.stopPropagation()}>
        <div id="dropFile" for="image_uploads" className="ViewImg__content-img">
          <img src={data.url} alt="something" />
        </div>

        <button
          className="ViewImg__content-buttonClose"
          onClick={() => setVisible(false)}
        >
          x
        </button>

        <p>{data.name}</p>

        <Link to="/Contact" className="ViewImg__content-button">
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default ViewImg;
