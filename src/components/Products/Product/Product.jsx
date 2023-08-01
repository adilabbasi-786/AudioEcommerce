import "./Product.scss";
import Prod from "../../../assets/products/earbuds-prod-1.webp";
import { useEffect, useState } from "react";
const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/products?populate=*");
      let res = await req.json();
      setData(res.data);
    };
    getData();
    console.log(getData);
  }, []);
  return (
    <>
      {data &&
        data.map((item) => (
          <div className="product-card" key={item.id}>
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
        ))}
    </>
  );
};

export default Product;
