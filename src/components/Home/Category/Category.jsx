import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";
import { useEffect, useState } from "react";
const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/categories?populate=*");
      let res = await req.json();
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);

  return (
    <div className="shop-by-category">
      <div className="categories">
        {data.map((item) => (
          <div className="category" key={item.id}>
            <img
              src={`http://localhost:1337${item.attributes.img.data.attributes.url}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
