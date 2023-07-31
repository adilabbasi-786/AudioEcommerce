import "./SingleProduct.scss";
import RelatedProduct from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import Prod from "../../assets/products/earbuds-prod-2.webp";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={Prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Product name</span>
            <span className="price">Price</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              exercitationem repudiandae laborum. Possimus quibusdam harum,
              corporis ratione hic reiciendis libero ad recusandae saepe
              accusamus id facere aperiam illum suscipit aliquid.
            </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>HeadPhone</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct />
      </div>
    </div>
  );
};

export default SingleProduct;
