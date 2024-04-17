import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import nft from "../../assets/small-nft.png";

const Accordian = ({ title, incoming, recieved, listed }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-primary-text/50 bg-primary/25 p-5 rounded-md">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray/700">{title}</h1>
        {!open ? (
          <button onClick={() => setOpen(true)}>
            <FaAngleDown className="text-gray/700 text-xl" />
          </button>
        ) : (
          <button onClick={() => setOpen(false)}>
            <FaAngleUp className="text-gray/700 text-xl" />
          </button>
        )}
      </div>
      {open && (
        <div className="mt-6">
          <div className="border border-primary-text/50 bg-white p-3 rounded-md flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={nft} alt="" />
              <div>
                <h2 className="text-gray/700 font-semibold text-md">
                  Collection Name
                </h2>
                <h3 className="text-sm text-primary/300 font-medium">
                  NFT Name
                </h3>
              </div>
            </div>

            {recieved || listed && <h1 className="text-base text-gray/700 font-semibold">200 XRP</h1>}

            {incoming && <button className="bg-success/500 text-white font-medium text-sm px-3 py-1 rounded-md">
              Accept Transfer
            </button>}

            {recieved && <div className="space-x-2">
              <button className="bg-success/500 text-white font-medium text-sm px-3 py-1 rounded-md">
                Accept
              </button>
              <button className="bg-warning/500 text-white font-medium text-sm px-3 py-1 rounded-md">
                Counter
              </button>
            </div>}

            {listed && <button className="bg-error/500 text-white font-medium text-sm px-3 py-1 rounded-md">
              Cancel
            </button>}

          </div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
