const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img } = bottle;

  return (
    <>
      <div className="flex flex-col items-center justify-center card w-96 shadow-xl border-[#2E8B57] bg-base-200 p-2 space-y-3 rounded-2xl">
        <h3 className="text-2xl font-semibold">Bottle {name}</h3>
        <img className="w-52" src={img} alt="" />
        <p>Price: ${price}</p>
        <button
          onClick={() => handleAddToCart(bottle)}
          className="btn btn-success"
        >
          Purchase
        </button>
      </div>
    </>
  );
};

export default Bottle;
