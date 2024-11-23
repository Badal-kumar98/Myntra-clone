import React from "react";
import BagSummary from "../Components/BagSummary";
import BagItems from "../Components/BagItems";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagitem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalitem = items.filter((item) => {
    const itemIndex = bagitem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalitem.map((item) => (
              <BagItems item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
