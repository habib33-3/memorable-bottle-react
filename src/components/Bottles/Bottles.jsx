import { useEffect, useState } from "react";
import Bottle from "./../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };

    fetchData();
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div className="w-max mx-auto my-3">
      <h2 className="text-2xl">Bottles Here {bottles.length}</h2>
      <h2>Cart {cart.length}</h2>
      <div className="grid grid-cols-3 items-center justify-center gap-10 my-10">
        {bottles.map((bottle) => {
          return (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          );
        })}
      </div>
    </div>
  );
};

export default Bottles;
