import { useEffect, useState } from "react";
import Bottle from "./../Bottle/Bottle";
import { addToLS, getStoredCart } from "../../util/localStorage";
import Cart from "../Cart/Cart";

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
    addToLS(bottle.id);
  };

  //   Load cart local storage
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();

      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  return (
    <div className="w-max mx-auto my-3 flex flex-col items-center justify-center">
      <h2 className="text-2xl">Bottles Here {bottles.length}</h2>

      <Cart cart={cart}></Cart>

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
