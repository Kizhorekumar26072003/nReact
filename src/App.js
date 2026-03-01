import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search bar
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Restaurant name,Star rating,cuisine,time for delivery
 *
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 *
 */

// passing an prop to an component is just like passing an arguments to an function
// we can pass just props then destructure in the element props.ele , we can just ({ele,ele}) this is called destructure on the fly or const {ele,ele} = props it is destructuring as u know;
// config driven ui - constrolling the ui through data / config

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  console.log("====================================");
  console.log(props.res.info.cuisine);
  console.log("====================================");
  const { image, name, cuisine, rating, cft } = props?.res?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img alt="logo" src={image.urlWithParams} className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisine.map((n) => n.name).join(", ")}</h4>

      <h4>{rating.aggregate_rating}</h4>
      <h4>{cft.text}</h4>
    </div>
  );
};

// async function getRestaurants() {
//   try {
//     const response = await fetch(
//       "https://namastedev.com/api/v1/listRestaurants",
//     );
//     const data = await response.json();
//     console.log("====================================");
//     console.log(
//       data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
//     );
//     console.log("====================================");
//     return data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//   } catch (error) {
//     console.error("Error fetching restaurants:", error);
//   }
// }
// getRestaurants();
// // Get specific restaurant menu
// async function getRestaurantMenu(restaurantId) {
//   try {
//     const response = await fetch(
//       `https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`,
//     );
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching menu:", error);
//   }
// }

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* its called component composition  , component inside component*/}
      <Body />
    </div>
  );
};

export const root = ReactDOM.createRoot(document.querySelector("#mUJS"));
root.render(<App />);

// config driven UI
// ldme
