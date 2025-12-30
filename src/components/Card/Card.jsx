import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.post?.url}
        onClick={() => props.openView(props.post)}
        alt="print"
      />

      <p>{props.post?.name}</p>
    </div>
  );
};

export default Card;
