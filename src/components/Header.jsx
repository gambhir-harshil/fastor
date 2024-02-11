import { BadgeDollarSign, Wallet } from "lucide-react";
const Header = ({ name }) => {
  return (
    <div className="flex h-[120px]">
      <div className="flex-[50%] bg-gray-100 rounded-b-xl px-4 py-5 flex flex-col">
        <span className="text-2xl font-bold tracking-wider text-gray-400">
          {name}
        </span>
        <span className="font-bold">Let&apos;s explore this evening</span>
      </div>
      <div className="flex-[50%] flex items-center justify-between pl-6">
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-lg shadow-xl">
            <BadgeDollarSign className="text-white" size={32} />
          </div>
          <span className="mt-1 text-sm font-semibold text-center text-gray-400">
            Offers
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-lg shadow-xl">
            <Wallet className="text-white" size={32} />
          </div>
          <span className="mt-1 text-sm font-semibold text-center text-gray-400">
            Wallet
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
