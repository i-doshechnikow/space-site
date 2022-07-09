export default () => {
  const categories = ["Hats", "Jackets", "Sneackers", "Womans", "Mens"];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container" key={category}>
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{category}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};
