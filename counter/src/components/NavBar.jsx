// NavBar.jsx
import React from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = ({ toggleLeaderBoard, connectPetraWallet }) => {
  return (
    <div className="h-16 bg-white">
      <div className="flex justify-between items-center h-full px-4 border-b border-gray-300">
        <div
          onClick={toggleLeaderBoard}
          className="text-3xl font-bold cursor-pointer whitespace-nowrap"
        >
          <MdOutlineMenuOpen />
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={connectPetraWallet}
          >
            Connect to Petra Wallet
          </button>
          <ConnectButton className="bg-black" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
