const Bottle = ({ bottle }) => {
  const { name, price, img } = bottle;

  return (
    <div>
      <h3>Bottle {name}</h3>
      <img src={img} alt="" />
      <p>Price: {price}</p>
    </div>
  );
};

export default Bottle;
