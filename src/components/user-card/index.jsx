import React, { useState } from "react";
import nft from "../../assets/nft.png";
import { Checkbox, DatePicker, Modal, Select } from "antd";
import nft3 from "../../assets/nft3.png";
import { FaAngleDown } from "react-icons/fa6";
const { Option } = Select;


const normalizeURI = (uri) => {
  const ipfsGateway = "https://ipfs.io/ipfs/";
  return uri.startsWith("http") ? uri : `${ipfsGateway}${uri}`;
};

const UserCard = ({nfts}) => {
  const [sell, setSell] = useState(false);
  const [transfer, setTransfer] = useState(false);
  let uri = normalizeURI(nfts.URI);
  console.log(nfts)
  return (
    <>
      <div className="w-52 rounded-md">
        <img src={uri} alt="nft" className="rounded-t-lg" />
        <div className="h-32 bg-white rounded-b-lg p-3 flex flex-col justify-between">
          <h3 className="text-gray/700 font-semibold text-xs">
            Bored Apes XRP Club #3245
          </h3>
          <div className="flex items-center gap-4">
            <h1 className="text-xl text-primary/500 font-semibold">249 XRP</h1>
            <div className="text-[10px] text-success/500 font-medium border border-success/500 rounded-md p-0.5 bg-success/50">
              Accept Offer
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs"
              onClick={() => setTransfer(true)}
            >
              Transfer
            </button>
            <button
              className="btn bg-error/500 border-0 w-20 justify-center items-center text-xs"
              onClick={() => setSell(true)}
            >
              Sell
            </button>
          </div>
        </div>
      </div>

      <Modal title="" open={sell} footer="" closable={false} centered>
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <img src={nft3} alt="" />
          <div>
            <h2 className="text-gray/800 font-semibold text-sm">NFT ID</h2>
            <p className="text-gray/500 font-medium text-xs">
              74y8329b39r8gbrc98crb98c3briu3cb98ibuc3ub98c3rbiu
            </p>
          </div>
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
          <Select
            className="w-[170px] border-red-500"
            defaultActiveFirstOption
            suffixIcon={<FaAngleDown className="text-primary/400" />}
          >
            <Option value="xrp">Select an address</Option>
          </Select>
          <div className="space-x-2">
            <Checkbox >Expiration</Checkbox>
            <DatePicker />
          </div>
          <div className="flex gap-3">
            <button className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs">
              Sell
            </button>
            <button
              className="btn bg-error/500 border-0 w-20 justify-center items-center text-xs"
              onClick={() => setSell(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal title="" open={transfer} footer="" closable={false} centered>
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <img src={nft3} alt="" />
          <div>
            <h2 className="text-gray/800 font-semibold text-sm">NFT ID</h2>
            <p className="text-gray/500 font-medium text-xs">
              74y8329b39r8gbrc98crb98c3briu3cb98ibuc3ub98c3rbiu
            </p>
          </div>
          <Select
            className="w-[170px] border-red-500"
            defaultActiveFirstOption
            suffixIcon={<FaAngleDown className="text-primary/400" />}
          >
            <Option value="xrp">Select an address</Option>
          </Select>
          <div className="flex gap-3 mt-6">
            <button className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs">
              Transfer
            </button>
            <button
              className="btn bg-error/500 border-0 w-20 justify-center items-center text-xs"
              onClick={() => setTransfer(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserCard;
