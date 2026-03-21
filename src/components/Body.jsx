import { RestaurantCard } from "./RestaurnantCard";

import { resObj } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  let [res, setRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const res = await data.json();
    console.log(res);

    setRes(
      res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }
  return res.length === 0 ? (
    <Shimmer />
  ) : (
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
          <RestaurantCard res={restaurant} key={restaurant.info.id} />
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
