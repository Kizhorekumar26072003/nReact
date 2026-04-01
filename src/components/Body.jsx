import { RestaurantCard } from "./RestaurnantCard";

import { resObj } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { swiggy_RestaurantList_API } from "../utils/constants";

const Body = () => {
  let [res, setRes] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [topratedRes, setTopRatedRes] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(`${swiggy_RestaurantList_API}`);
    const fetchedData = await data.json();

    setRes(
      fetchedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }
  const filteredRes = res
    .filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
    )
    .filter((filtered) =>
      topratedRes ? filtered.info.avgRating >= 4.5 : true,
    );
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="ipAndBtn">
        <input
          type="text"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTopRatedRes(!topratedRes);
          }}
          className={topratedRes ? "topBtnActive" : "topBtn"}
        >
          Top rated Restaurnants
        </button>
      </div>

      <div className="res-container">
        {filteredRes.length > 0 ? (
          filteredRes.map((restaurant) => (
            //should give key property to components especially components oon loop. otherwise react wwill re render all the same level elements.
            <RestaurantCard res={restaurant} key={restaurant.info.id} />
          ))
        ) : (
          <p>No Restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
