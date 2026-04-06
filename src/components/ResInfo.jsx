import { useEffect, useState } from "react";
import { resObj } from "../utils/mockdata.jsx";
import Shimmer from "./shimmer.jsx";
import MenuDish from "./MenuDish.jsx";
import { useParams } from "react-router";
const ResInfo = () => {
  const [resMenu, setResMenu] = useState(resObj);
  const { resId } = useParams();
  console.log(resMenu);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0279117&lng=80.26051369999999&restaurantId=806891&catalog_qa=undefined&submitAction=ENTER",
  //   );

  //   console.log("Status:", data.status);
  //   console.log("Type:", data.headers.get("content-type"));

  //   const text = await data.text();
  //   console.log("RAW:", text);
  //   // const json = await data.json();

  //   // console.log("------------------------", json);
  //   // setResMenu(json);
  // };
  const { name, costForTwoMessage, areaName, city, cuisines } =
    resMenu[0].data.cards[2].card.card.info;

  const { itemCards } =
    resMenu[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  console.log(name, costForTwoMessage, areaName, city, resMenu);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>{areaName}</h3>
      <h4>{city}</h4>
      <h5>{cuisines.join(", ")}</h5>

      <MenuDish dish={itemCards} />
    </div>
  );
};

export default ResInfo;
