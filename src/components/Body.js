const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurant.map((restaurant) => (
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
