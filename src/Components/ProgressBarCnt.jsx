import React from "react";

const ProgressBarCnt = ({questionIndex, totalQuestions, totalPoints, pointsEarned}) => {
  return (
    <div className="w-[80%] flex flex-col justify-center items-center p-2">
      <div className="w-full">
        <progress className="w-full" max={totalQuestions} value={questionIndex}></progress>
      </div>
      <div className="w-full flex justify-between text-[12px] md:text-[16px] lg:text-lg text-[#e7e6e2]">
        <span>Question {questionIndex +1}/ {totalQuestions}</span>
        <span>Points: {pointsEarned}/ {totalPoints}</span>
      </div>
    </div>
  );
};

export default ProgressBarCnt;
