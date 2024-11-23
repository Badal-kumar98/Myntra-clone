import React from "react";
import { useSelector } from "react-redux";
import HomeItem from "../Components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <div>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
