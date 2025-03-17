import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Web3Modal from 'web3modal';

// import { marketplaceAddress } from '../config';
import NFTMarketplace from '../abi/NFTMarketplace.json';

const ResellNFT = () => {
  const [formInput, updateFormInput] = useState({ price: '', image: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const tokenURI = queryParams.get('tokenURI');
  const { image, price } = formInput;

  useEffect(() => {
    fetchNFT();
  }, [id, tokenURI]);

  async function fetchNFT() {
    if (!tokenURI) return;
    try {
      const meta = await axios.get(tokenURI);
      updateFormInput((state) => ({ ...state, image: meta.data.image }));
    } catch (error) {
      console.error('Error fetching NFT metadata:', error);
    }
  }

  async function listNFTForSale() {
    if (!price) return;
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const priceFormatted = ethers.utils.parseUnits(price, 'ether');
      const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer);
      let listingPrice = await contract.getListingPrice();
      listingPrice = listingPrice.toString();

      const transaction = await contract.resellToken(id, priceFormatted, { value: listingPrice });
      await transaction.wait();

      navigate('/');
    } catch (error) {
      console.error('Error listing NFT for sale:', error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12 wi-12">
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
        />
        {image && <img className="rounded mt-4" width="350" src={image} alt="NFT Preview" />}
        <button
          onClick={listNFTForSale}
          className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
        >
          List NFT
        </button>
      </div>
    </div>
  );
};

export default ResellNFT;
