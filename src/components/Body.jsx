import { RestaurantCard } from "./RestaurnantCard";

import { resObj } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  let [res, setRes] = useState(resObj);

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            setRes(
              res.filter(
                (restaurant) => restaurant.info.rating.aggregate_rating <= 4,
              ),
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {res.map((restaurant) => (
          //should give key property to components especially components oon loop. otherwise react wwill re render all the same level elements.
          <RestaurantCard res={restaurant} key={restaurant.info.resId} />
        ))}
        {/* <RestaurantCard resName="" cuisine="" />
        <RestaurantCard resName="" cuisine="" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
      </div>
    </div>
  );
};

export default Body;
