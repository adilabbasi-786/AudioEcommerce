import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../Utils/Context";
const Cart = ({ setShowcart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">shopping Cart</span>
          <MdClose />
          <span
            className="text"
            onClick={() => setShowcart(false)}
            style={{ cursor: "pointer" }}
          >
            close
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in cart</span>
            <button className="return-cta">Return to shop</button>
          </div>
        )}

        {!!cartItems.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className=" text total">Rs {cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta">CheckOut</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
