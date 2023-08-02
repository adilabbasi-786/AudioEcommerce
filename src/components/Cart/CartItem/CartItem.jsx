import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
import { Context } from "../../../Utils/Context";

const CartItem = () => {
  const { cartItems, handleAddToCart, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div className="cart-product" key={item.id}>
          <div className="img-container">
            <img src={prod} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>x</span>
              <span>Rs {item.attributes.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
