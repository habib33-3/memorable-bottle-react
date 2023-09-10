import PropTypes from "prop-types";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="w-24 flex items-center justify-center gap-4 rounded-sm  ">
        {cart.map((bottle) => {
          return (
            <>
              <div key={bottle.id}>
                <img src={bottle.img} alt="" />
                <button
                  onClick={() => handleRemoveFromCart(bottle.id)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func,
};

export default Cart;
