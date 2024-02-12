import ListCard from "./ListCard";

const List = ({ restaurants }) => {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-xl font-bold">Popular Ones</h1>
      <div className="flex flex-col gap-4 my-4">
        {restaurants.slice(0, 4).map((restaurant) => (
          <ListCard key={restaurant.restaurant_id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default List;
