import React from "react";

const PorductCard = ({ item }) => {
  return (
    <>
      <div
        className="product-card"
        // key={item.id}
        // onClick={() => navigate(`/product/" ${item.id}`)}
      >
        <div className="thumbnail">
          <img
            src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
            alt=""
          />
        </div>
        <div className="prod-details">
          <span className="name">{item.attributes.title}</span>
          <span className="price">{item.attributes.price}</span>
        </div>
      </div>
    </>
  );
};

export default PorductCard;
