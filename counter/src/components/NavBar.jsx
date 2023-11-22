import React from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = ({ toggleLeaderBoard }) => {
  return (
    <div className="h-16 bg-white">
      <div className="flex justify-between items-center h-full px-4 border-b border-gray-300">
        <div
          onClick={toggleLeaderBoard}
          className="text-3xl font-bold  cursor-pointer whitespace-nowrap">
          <MdOutlineMenuOpen />
        </div>
        <ConnectButton className="bg-black" />
      </div>
    </div>
  );
};

export default NavBar;
