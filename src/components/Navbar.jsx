import { MapPin } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] shadow-lg sticky top-0 px-8">
      <div className="flex flex-col mt-8">
        <h6 className="font-bold text-gray-400">
          <span className="flex items-center">
            Pre Order From <MapPin size={16} />
          </span>
        </h6>
        <h1 className="text-lg font-bold">Connaught Place</h1>
      </div>
    </div>
  );
};

export default Navbar;
