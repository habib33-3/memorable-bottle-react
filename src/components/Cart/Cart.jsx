import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="w-24 flex items-center justify-center gap-4 rounded-sm  ">
        {cart.map((bottle) => {
          return (
            <>
              <img key={bottle.id} src={bottle.img} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
