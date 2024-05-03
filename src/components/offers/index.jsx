import React from "react";
import Accordian from "../accordian";
import { useEffect, useState } from "react";

const Offers = () => {
  const [nftBuyOffers, setNftBuyOffers] = useState([]);
  const [nftSellOffers, setNftSellOffers] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: "rfCWgUcHGzAHF7aSptDF98LPrszcusungS" }),
    };

    fetch("https://backend.textrp.io/getUserNftsWithBuyOffers", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const nftBuyOffers = data
          .filter((item) => item.NftBuyOffers.length > 0)
          .map((item) => ({
            NFTokenID: item.NFTokenID,
            URI: item.URI,
            nft_serial: item.nft_serial,
            NftBuyOffers: item.NftBuyOffers,
          }));
        setNftBuyOffers(nftBuyOffers);
        //console.log(nftBuyOffers);
      })
      .catch((error) => console.error("Error fetching NFT buy offers:", error));
  }, []);
  // Fetch NFT Sell Offers
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: "rfCWgUcHGzAHF7aSptDF98LPrszcusungS" }),
    };

    fetch(
      "https://backend.textrp.io/getMembersNftsWithSellOffers",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const nftSellOffers = data.map((item) => item.NftBuyOffers).flat();
        console.log(JSON.stringify(nftSellOffers) + "Nft sell offers");
        setNftSellOffers(nftSellOffers);
      })
      .catch((error) =>
        console.error("Error fetching NFT sell offers:", error)
      );
  }, []);

  return (
    <div className="border border-t-0 border-primary-text/50 bg-[#F6F2FC] p-5 rounded-b-md space-y-4">
      <Accordian title="Incoming Transfers" listed={true} />
      <Accordian title="Received offers"recieved={true}offers={nftBuyOffers}/>
      <Accordian title="Listed items" listed={true} offers={nftSellOffers} />
    </div>
  );
};

export default Offers;
