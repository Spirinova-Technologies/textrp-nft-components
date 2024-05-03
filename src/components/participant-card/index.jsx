import React, { useState } from "react";
import nft from "../../assets/nft.png";
import { Modal, Select } from "antd";
import nft3 from "../../assets/nft3.png";
import { FaAngleDown } from "react-icons/fa6";
const { Option } = Select;

const ParticipantCard = ({ variant }) => {
  const [counter, setCounter] = useState(false);
  const handleBuyClick = () => {
    console.log("Buy button clicked");
  };
  return (
    <>
      <div className="w-52 rounded-md">
        <img src={nft} alt="nft" className="rounded-t-lg" />
        <div className="h-32 bg-white rounded-b-lg p-3 flex flex-col justify-between">
          <h3 className="text-gray/700 font-semibold text-xs">
            Bored Apes XRP Club #3245
          </h3>

          {!variant ? (
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl text-primary/500 font-semibold">
                  249 XRP
                </h1>
                <p className="text-[8px] text-gray/500 font-medium">
                  +1% fee = 251.49 XRP
                </p>
              </div>
              <div className="text-[8px] text-error/500 font-medium border border-error/500 rounded-md p-0.5">
                Expires in: 20 hours
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 px-4">
              <div className="w1/2 text-sm text-medium text-gray/500 border-gray/200 bg-gray/100 px-2 py-1.5 rounded-md">
                Amount
              </div>
              <Select
                className="w-1/2 border-red-500"
                defaultActiveFirstOption
                suffixIcon={<FaAngleDown className="text-primary/400" />}
              >
                <Option value="xrp">XRP</Option>
              </Select>
            </div>
          )}

          {!variant ? (
            <div className="flex justify-between items-center">
              <button
                className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs"
                onClick={handleBuyClick}
              >
                Buy
              </button>
              <button
                className="btn bg-warning/500 border-0 w-20 justify-center items-center text-xs"
                onClick={() => setCounter(true)}
              >
                Counter
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs">
                Buy
              </button>
            </div>
          )}
        </div>
      </div>

      <Modal title="" open={counter} footer="" closable={false} centered>
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <img src={nft3} alt="" />
          <div>
            <h2 className="text-gray/800 font-semibold text-sm">NFT ID</h2>
            <p className="text-gray/500 font-medium text-xs">
              74y8329b39r8gbrc98crb98c3briu3cb98ibuc3ub98c3rbiu
            </p>
          </div>
          <h2 className="text-gray/800 font-medium text-sm">
            Current price: 249 XRP
          </h2>
          <div className="flex items-center gap-3 px-4">
            <div className="w1/2 text-sm text-medium text-gray/500 border-gray/200 bg-gray/100 px-3 py-1.5 rounded-md">
              Amount
            </div>
            <Select
              className="w-[80px] border-red-500"
              defaultActiveFirstOption
              suffixIcon={<FaAngleDown className="text-primary/400" />}
            >
              <Option value="xrp">XRP</Option>
            </Select>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs">
              Counter
            </button>
            <button
              className="btn bg-error/500 border-0 w-20 justify-center items-center text-xs"
              onClick={() => setCounter(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ParticipantCard;
