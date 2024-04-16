import React from "react";
import { Select } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import UserCard from "../user-card";
const { Option } = Select;

const MyNfts = () => {
  return (
    <div className="border border-t-0 border-primary-text/50 bg-[#F6F2FC] p-5 rounded-b-md">
      <h1 className="text-lg font-semibold text-center">My NFTs</h1>
      <div className="flex justify-center gap-5 mt-3">
        <Select
            className="w-[120px] border-red-500"
            defaultActiveFirstOption
            suffixIcon={<FaAngleDown className='text-primary/400' />}
        >
          <Option value="all">All NFTs</Option>
          <Option value="sold">Sold</Option>
          <Option value="bought">Bought</Option>
        </Select>
        <Select
            className="w-[120px] border-red-500"
            defaultActiveFirstOption
            suffixIcon={<FaAngleDown className='text-primary/400' />}
        >
          <Option value="all">Older</Option>
          <Option value="sold">Sold</Option>
          <Option value="bought">Bought</Option>
        </Select>
      </div>
      <div className="mt-5">
        <UserCard />
      </div>
    </div>
  );
};

export default MyNfts;
