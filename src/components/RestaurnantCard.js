const styleCard = {
  backgroundColor: "#f0f0f0",
};

export const RestaurantCard = (props) => {
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
