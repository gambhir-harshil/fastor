import SliderCard from "./SliderCard";

const Slider = ({ restaurants }) => {
  return (
    <div className="h-full mt-10">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">Your taste</span>
        <span className="font-bold text-gray-400">see all</span>
      </div>
      <div className="flex items-center max-w-screen-sm gap-4 mt-4 overflow-x-scroll md:max-w-full no-scrollbar">
        {restaurants.map((restaurant) => (
          <SliderCard key={restaurant.restaurant_id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
