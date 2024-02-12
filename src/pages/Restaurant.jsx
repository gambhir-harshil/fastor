import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";
const Restaurant = () => {
  const location = useLocation();
  const restaurant = location.state;
  console.log(restaurant);
  return (
    <div className="relative flex flex-col h-screen">
      <div className="h-[50%] w-full">
        <img
          src={restaurant.images[0].url}
          alt={restaurant.restaurant_name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 h-[55%] z-50 rounded-t-xl bg-white w-screen px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{restaurant.restaurant_name}</h1>
            <h2 className="text-lg text-gray-400">
              {restaurant.location.location_address_2}
            </h2>
            <span className="mt-1 text-sm font-bold text-orange-400">
              4 Offers trending
            </span>
          </div>
          <span className="flex items-center text-sm font-bold">
            <Star size={12} strokeWidth={3} />{" "}
            {restaurant.rating?.restaurant_avg_rating}
          </span>
        </div>
        <p className="mt-16">
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
