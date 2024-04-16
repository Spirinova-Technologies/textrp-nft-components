import { Tabs } from "antd";
import React from "react";
import MyNfts from "../../components/my-nfts";
import Offers from "../../components/offers";

const Home = () => {
  const items = [
    {
      key: "1",
      label: <p className="text-[#344054] font-semibold text-sm">NFTs</p>,
      children: <MyNfts />
    },
    {
      key: "2",
      label: <p className="text-[#344054] font-semibold text-sm">Offers</p>,
      children: <Offers />
    },
  ];

  return (
    <div className="p-10">
      <div className="w-[550px] h-[550px]">
        <Tabs type="card" defaultActiveKey="1" items={items} className="" />
      </div>
    </div>
  );
};

export default Home;
