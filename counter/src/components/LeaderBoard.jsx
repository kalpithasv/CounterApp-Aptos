import React from 'react';
import LeaderBoardCard from './LeaderBoardCard';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const LeaderBoard = ({ toggleLeaderBoard }) => {
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
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
      </div>
    </div>
  );
};

export default LeaderBoard;
