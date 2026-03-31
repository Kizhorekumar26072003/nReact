import { RestaurantCard } from "./RestaurnantCard";

import { resObj } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { swiggy_RestaurantList_API } from "../utils/constants";

const Body = () => {
  let [res, setRes] = useState([]);
  let [filter, setFilter] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [topratedRes, setTopRatedRes] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(`${swiggy_RestaurantList_API}`);
    const res = await data.json();
    console.log(res);

    setRes(
      res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilter(
      res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }
  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="ipAndBtn">
        <input type="text" placeholder="Search Restaurants" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
          let filteredRes = res.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setFilter(filteredRes);
          } 
        }
        
        />
        <button onClick={()=>{
            topratedRes ? setFilter(res) : setFilter(res.filter((restaurant) => restaurant.info.avgRating > 4.5)) 
            setTopRatedRes(!topratedRes)}}>
          Top rated Restaurnants
        </button>
      </div>

      <div className="res-container">
        {filter.length > 0 ? filter.map((restaurant) => (
          //should give key property to components especially components oon loop. otherwise react wwill re render all the same level elements.
          <RestaurantCard res={restaurant} key={restaurant.info.id} />
        )) : (
          <p>No restaurants found</p>
        )}
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
