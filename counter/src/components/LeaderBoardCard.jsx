import React from 'react';

const LeaderBoardCard = ({num,address}) => {
  return (
    <div className="flex justify-between px-4 py-2 gap-14 border border-black mx-4 rounded-md">
      <div className="text-sm truncate"> {address}</div>
      <div>{num}</div>
    </div>
  );
};

export default LeaderBoardCard;
