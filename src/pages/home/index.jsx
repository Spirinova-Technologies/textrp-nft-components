import React from "react";
import MyNfts from "../../components/my-nfts";
import Offers from "../../components/offers";
import { Select, Tabs } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import UserCard from "../../components/user-card";
import ParticipantCard from "../../components/participant-card";
const { Option } = Select;

const Home = () => {
  const items = [
    {
      key: "1",
      label: <p className="text-[#344054] font-semibold text-sm">NFTs</p>,
      children: <MyNfts />,
    },
    {
      key: "2",
      label: <p className="text-[#344054] font-semibold text-sm">Offers</p>,
      children: <Offers />,
    },
  ];

  return (
    <div className="p-10">
      <div className="w-[550px] h-[550px]">
        <Tabs type="card" defaultActiveKey="1" items={items} className="" />
      </div>

      <div className="w-[550px] mt-10">
        <div className="border border-primary-text/50 bg-[#F6F2FC] p-5 rounded-md">
          <h1 className="text-lg font-semibold text-center">Participant NFTs</h1>
          <div className="flex justify-center gap-5 mt-3">
            <Select
              className="w-[120px] border-red-500"
              defaultActiveFirstOption
              suffixIcon={<FaAngleDown className="text-primary/400" />}
            >
              <Option value="all">All NFTs</Option>
              <Option value="sold">Sold</Option>
              <Option value="bought">Bought</Option>
            </Select>
            <Select
              className="w-[120px] border-red-500"
              defaultActiveFirstOption
              suffixIcon={<FaAngleDown className="text-primary/400" />}
            >
              <Option value="all">Older</Option>
              <Option value="sold">Sold</Option>
              <Option value="bought">Bought</Option>
            </Select>
          </div>
          <div className="mt-5 flex space-x-3">
            <ParticipantCard />
            <ParticipantCard variant={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
