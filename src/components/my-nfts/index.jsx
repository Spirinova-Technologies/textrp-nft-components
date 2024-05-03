import React, { useState, useEffect, useRef } from "react";
import { Select } from "antd";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import UserCard from "../user-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const { Option } = Select;

const MyNfts = () => {
  const [nftData, setNftData] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchNFTData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8080/get-users-nfts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            addresses: ["rfCWgUcHGzAHF7aSptDF98LPrszcusungS"],
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch NFT data");
        }

        const data = await response.json();
        setNftData(data);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      }
    };
    fetchNFTData();
  }, []);
  return (
    <div className="border border-t-0 border-primary-text/50 bg-[#F6F2FC] p-5 pr-0 rounded-b-md">
      <h1 className="text-lg font-semibold text-center">My NFTs</h1>
      <div className="flex justify-center gap-5 mt-3">
        {/* <Select
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
        </Select> */}
      </div>
      <div className="mt-5">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper relative"
        >
          {nftData["rfCWgUcHGzAHF7aSptDF98LPrszcusungS"] &&
            nftData["rfCWgUcHGzAHF7aSptDF98LPrszcusungS"].map((nfts, index) => {
              return (
                <SwiperSlide>
                  <UserCard key={index} nfts={nfts} />
                </SwiperSlide>
              );
            })}
          <button
            className={`custom-prev absolute top-[40%] left-0.5 z-50 p-2.5 bg-white border border-primary/200 rounded-lg`}
          >
            <FaAngleLeft className="text-primary/500" />
          </button>
          <button
            className={`custom-next absolute top-[40%] right-0.5 z-50 p-2.5 bg-white border border-primary/200 rounded-lg`}
          >
            <FaAngleRight className="text-primary/500" />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default MyNfts;
