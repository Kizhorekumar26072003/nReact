import React from "react";
import ReactDOM from "react-dom/client";

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
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_6VlgZU_EhAVqQKKO72nDQNbmCZPhHNybQ&s"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPwLOBDPUFS-wwGSnmIfIuUJOmbJQjOeMWQ&s"
        className="res-logo"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4</h4>
      <h4>38 Mins</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Grilled Chicken , Chinese"
        />
        <RestaurantCard resName="KFC" cuisine="Fast Food,western" />
        <RestaurantCard resName="Udhayam" cuisine="Indian" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

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
