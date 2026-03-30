import { RestaurantCard } from "./RestaurnantCard";

import { resObj } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  let [res, setRes] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [searchArray, setSearchArray] = useState([]);
  let [toggle, setToggle] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0279117&lng=80.26051369999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const res = await data.json();

    setRes(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setSearchArray(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  }
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div>
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyUp={() => {
              let filteredArray = res.filter((r) =>
                r.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setSearchArray(filteredArray);
            }}
          />
          <button className="search-btn">Search</button>
        </div>

        <button
          onClick={() => {
            setToggle(toggle === true ? false : toggle);
            setSearchArray(
              res.filter((restaurant) => restaurant.info.avgRating >= 4.2),
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchArray.map((restaurant) => (
          //should give key property to components especially components oon loop. otherwise react wwill re render all the same level elements.
          <RestaurantCard res={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
