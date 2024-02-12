const SliderCard = ({ restaurant }) => {
  return (
    <div className="flex flex-col">
      <div className="h-[120px] w-[120px] md:h-[160px] md:w-[160px] rounded-t-xl overflow-hidden shadow-2xl">
        <img
          src={restaurant.images[0].url}
          alt={restaurant.restaurant_name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-16 px-2 py-1 bg-gray-100 rounded-b-xl">
        <h4 className="text-sm font-semibold">{restaurant.restaurant_name}</h4>
        <p className="text-xs font-semibold text-gray-400">
          {restaurant.location?.location_address_2}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
