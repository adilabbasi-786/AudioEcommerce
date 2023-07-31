import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setShowcart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">shopping Cart</span>
          <MdClose />
          <span className="text" onClick={() => setShowcart(false)}>
            close
          </span>
        </div>
        {/* <div className="empty-cart">
          <BsCartX />
          <span>No Products in cart</span>
          <button className="return-cta">Return to shop</button>
        </div> */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal</span>
              <span className=" text total">1234</span>
            </div>
            <div className="button">
              <button className="checkout-cta">CheckOut</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
