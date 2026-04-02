import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
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

//IN Industry Standards , they do not let their files to exceed 100 lines
const App = () => {
  return (
    <div className="app">
      <Header />
      {/* its called component composition  , component inside component*/}
      <Outlet />
    </div>
  );
};

const appProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export const root = ReactDOM.createRoot(document.querySelector("#mUJS"));
root.render(<RouterProvider router={appProvider} />);

// config driven UI
// ldme
