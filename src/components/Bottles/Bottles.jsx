import { useEffect, useState } from "react";
import Bottle from "./../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-max mx-auto my-3">
      <h2 className="text-2xl">Bottles Here {bottles.length}</h2>
      {bottles.map((bottle) => {
        return <Bottle key={bottle.id} bottle={bottle}></Bottle>;
      })}
    </div>
  );
};

export default Bottles;
