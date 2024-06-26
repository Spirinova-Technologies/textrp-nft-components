import React, { useEffect, useState } from "react";
import nft from "../../assets/nft.png";
import { Checkbox, DatePicker, Modal, Select } from "antd";
import nft3 from "../../assets/nft3.png";
import { FaAngleDown } from "react-icons/fa6";
import axios from "axios";
const { Option } = Select;

const normalizeURI = (uri) => {
  const ipfsGateway = "https://cloudflare-ipfs.com/ipfs/";
  const oldIpfsGateway = "https://ipfs.io/ipfs/";
  if (uri.startsWith(oldIpfsGateway)) {
    return uri.replace(oldIpfsGateway, ipfsGateway);
  }
  return uri;
};

const UserCard = ({ nfts }) => {
    const [sell, setSell] = useState(false);
    const [transfer, setTransfer] = useState(false);
    const [amount, setAmount] = useState("");
    const [receiver, setReceiver] = useState("");
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [transactionStatus, setTransactionStatus] = useState("");
    const [websocketUrl, setWebsocketUrl] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
  const handleSellNFT = async () => {
    console.log("Sell button clicked");
    const payload = {
      nft: nfts.NFTokenID,
      amount: amount,
      owner: nfts.Issuer,
      receiver: receiver,
    };
    console.log(payload);
    console.log("Current receiver:", receiver);

    try {
      const response = await axios.post(
        "https://backend.textrp.io/create-nft-offer",
        payload
      );
      setQrCodeUrl(response.data.refs.qr_png);
      setWebsocketUrl(response.data.refs.websocket_status);
      setIsModalVisible(true); // Open the modal when the offer is created
      console.log("Offer created:", response.data);
    } catch (error) {
      console.error("Error creating offer:", error);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    if (websocketUrl) {
      const ws = new WebSocket(websocketUrl);

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.signed) {
          setTransactionStatus("Transaction signed");
        } else if (data.rejected) {
          setTransactionStatus("Transaction rejected");
        }
      };

      return () => {
        ws.close();
      };
    }
  }, [websocketUrl]);


  let uri = normalizeURI(nfts.URI);
  if (!uri) {
    uri = nft;
  }
  return (
    <>
      <div className="w-52 rounded-md">
        <img src={uri} alt="nft" className="rounded-t-lg h-48 w-full" />
        <div className="h-32 bg-white rounded-b-lg p-3 flex flex-col justify-between">
          <h3 className="text-gray/700 font-semibold text-xs">
            {nfts.nft_serial}
          </h3>
          <div className="flex items-center gap-4">
            <h1 className="text-xl text-primary/500 font-semibold">
              {nfts.TransferFee}XRP
            </h1>
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
          <img src={uri} alt="" />
          <div>
            <h2 className="text-gray/800 font-semibold text-sm">NFT ID</h2>
            <p className="text-gray/500 font-medium text-xs">
              {nfts.NFTokenID}
            </p>
          </div>
          <div className="flex items-center gap-3 px-4">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-[80px] border-red-500 px-2 py-1 rounded-md bg-gray-100"
              placeholder="Amount"
            />
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
            onChange={(value) => setReceiver(value)}
          >
            <Option value="rMHpzAjTnksXbec6tX1597ZRfcyGESafGS">
              rMHpzAjTnksXbec6tX1597ZRfcyGESafGS
            </Option>
          </Select>
          <div className="space-x-2">
            <Checkbox>Expiration</Checkbox>
            <DatePicker />
          </div>
          <div className="flex gap-3">
            <button
              className="btn bg-success/500 border-0 w-20 justify-center items-center text-xs"
              onClick={() => handleSellNFT()}
            >
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
      <Modal
        title="Transaction QR Code"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        {qrCodeUrl && (
          <div className="qr-code-container">
            <img
              src={qrCodeUrl}
              alt="Scan this QR code with XUMM to sign the transaction"
            />
          </div>
        )}
        <p>Transaction Status: {transactionStatus}</p>
      </Modal>
    </>
  );
};

export default UserCard;
