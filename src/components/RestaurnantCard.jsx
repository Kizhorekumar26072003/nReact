import { CLOUDINARY_BASE_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

export const RestaurantCard = (props) => {
  const { avgRating, cloudinaryImageId, cuisines, costForTwo, name } =
    props?.res.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="logo"
        src={`${CLOUDINARY_BASE_URL}/${cloudinaryImageId}`}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
