const styleCard = {
  backgroundColor: "#f0f0f0",
};

export const RestaurantCard = (props) => {
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  const { avgRating, cloudinaryImageId, cuisines, costForTwo, name } =
    props?.res.info;
  console.log(cloudinaryImageId);

  return (
    <div className="res-card" style={styleCard}>
      <img alt="logo" src={cloudinaryImageId} className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.map((c) => c)}</h4>

      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
