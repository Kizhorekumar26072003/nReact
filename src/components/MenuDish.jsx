const MenuDish = ({ dish }) => {
  console.log("====================================");
  console.log(dish);
  console.log("====================================");

  return (
    <>
      {dish.map((d) => (
        <div key={d.card.info.id} className="menuItems">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${d.card.info.imageId}`}
            alt="dish"
            className="dishImg"
          />
          <h3>{d.card.info.name}</h3>
          <h4>{d.card.info.price / 100}</h4>
          <h4>
            {d.card.info.ratings.aggregatedRating.rating === undefined
              ? "Be the One to Rate it first"
              : `${d.card.info.ratings.aggregatedRating.rating}(
                  ${d.card.info.ratings.aggregatedRating.ratingCount})`}
          </h4>
        </div>
      ))}
    </>
  );
};

export default MenuDish;
