import React from "react";
import ProgressBarCnt from "./ProgressBarCnt";

const QuestionCnt = ({
  question,
  questionIndex,
  answer,
  quizDispatch,
  totalQuestions,
  totalPoints,
  pointsEarned,
}) => {
  const hasAnswered = answer !== null;
  const correctOption = question.correctOption;
  return (
    <div className="mx-auto my-10 p-2 flex flex-col justify-center items-center gap-10 w-[95vw] md:w-[70vw] min-h-[65vh] h-auto text-[#ddd7d7] cnt">
      <ProgressBarCnt
        questionIndex={questionIndex}
        totalQuestions={totalQuestions}
        totalPoints={totalPoints}
        pointsEarned={pointsEarned}
      />
      <div className="w-full md:w-[80%] flex flex-col gap-5">
        <h2 className="lg:text-3xl text-xl p-1">
          {questionIndex + 1}
          {". "}
          {question.question}
        </h2>
        <div className="w-full md:text-xl text-lg flex flex-col gap-5 p-2 justify-start options">
          {question.options.map((option, index) => {
            return (
              <button
                className={`text-left lg:text-2xl text-lg md:p-2 p-1 border-2 border-[#424242] rounded-xl hover:bg-[#485056ac] hover:translate-x-2 duration-300 ease-in-out ${
                  hasAnswered
                    ? answer === index
                      ? correctOption === index
                        ? "bg-[#71b8485a] translate-x-2"
                        : "bg-[#b5523e5a] translate-x-2"
                      : correctOption === index
                      ? "bg-[#71b8485a]"
                      : "bg-[#1c1c1c5a]"
                    : ""
                }`}
                disabled={hasAnswered}
                onClick={() => {
                  quizDispatch({
                    type: "newAnswer",
                    payload: index,
                    pointsEarned: correctOption === index ? question.points : 0,
                  });
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {hasAnswered ? (
        questionIndex +1 < totalQuestions ? (
          <div className="w-full md:w-[80%] flex justify-end items-end px-2 md:px-5">
            <button
              className="next-btn lg:text-2xl text-md flex justify-center items-center gap-2"
              onClick={() => {
                quizDispatch({
                  type: "nextQuestion",
                  payload: {
                    nextIndex: questionIndex + 1,
                  },
                });
              }}
            >
              Next
              <div className="">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <div className="w-[80%] flex justify-end items-end px-5">
            <button
              className="next-btn lg:text-2xl text-md flex justify-center items-center gap-2"
              onClick={() => {
                quizDispatch({
                  type: "finished",
                });
              }}
            >
              Finish
            </button>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionCnt;
