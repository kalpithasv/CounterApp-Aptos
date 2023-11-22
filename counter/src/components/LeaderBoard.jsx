import React from 'react';
import LeaderBoardCard from './LeaderBoardCard';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const LeaderBoard = ({ toggleLeaderBoard,num }) => {
  return (
    <div className="w-[380px] h-screen bg-white/50 backdrop-blur-xl">
      <div className="flex items-center gap-3 p-4">
        <p className="text-center w-full text-2xl mx-auto uppercase font-inter font-medium">
          🏆 LeaderBoard 🏆
        </p>
        <div onClick={toggleLeaderBoard} className="cursor-pointer">
          <AiOutlineCloseCircle className="text-3xl text-black/70" />
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-5 h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
        <LeaderBoardCard num={num} address={"0x462Ba8a537DCcb8A5eD3e0850752A101ed4B478d"}/>
        <LeaderBoardCard num={3} address={"0x789798se89fee897A101ed4B478d..."}/>
        <LeaderBoardCard num={3} address={"0x679238hjknckjnnvkmekmvlkemrm..."}/>
        <LeaderBoardCard num={3} address={"0x54kj787f97d98d8989escx009d89..."}/>
        <LeaderBoardCard num={2} address={"0x89sdvre89dcer7r8erev78rver6v..."}/>
        <LeaderBoardCard num={2} address={"0xDC24316b9AE028F1497c275EB919..."}/>
        <LeaderBoardCard num={2} address={"0x34dejhew98we89ew989efw4B478d..."}/>
        <LeaderBoardCard num={1} address={"0x78efwefefe8tgt7ee901ed4B478d..."}/>
        <LeaderBoardCard num={1} address={"0x67efer8f7r8re8fewf9864bB478d..."}/>
        <LeaderBoardCard num={1} address={"0x09f8r9frgt8e85fn7A101ed4B47mk..."}/>

      </div>
    </div>
  );
};

export default LeaderBoard;
