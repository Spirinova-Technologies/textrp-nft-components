import React from "react";
import nft from "../../assets/nft.png";

const UserCard = () => {
  return (
    <div className="w-52 rounded-md">
      <img src={nft} alt="nft" className="rounded-t-lg" />
      <div className="h-32 bg-white rounded-b-lg p-3 flex flex-col justify-between">
        <h3 className="text-gray/700 font-semibold text-sm">Bored Apes XRP Club #3245</h3>
        <div className="flex items-center gap-4">
            <h1 className="text-xl text-primary/500 font-semibold">249 XRP</h1>
            <div className="text-xs text-success/500 font-semibold border border-success/500 rounded-md px-1.5 py-0.5 bg-success/50">
                Accept Offer
            </div>
        </div>
        <div className="flex justify-between items-center">
            <button className="btn bg-success/500 border-0 w-20 justify-center items-center">
                Transfer
            </button>
            <button className="btn bg-error/500 border-0 w-20 justify-center items-center">
                Sell
            </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
