import React from "react";

const Starter = ({quizDispatch}) => {
  const handleStartQuiz = () =>{
    quizDispatch({"type" : "startQuiz"})
  };

  return (
    <div className="mx-auto my-10 flex flex-col justify-evenly items-center gap-5 w-[70vw] min-h-[60vh] md:h-[70vh] h-[80vh] cnt">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-slate-50">
        Welcome To Practice React Quiz
      </h2>
      <h4 className="text-lg md:text-xl lg:text-3xl font-semibold text-slate-50">
        Sharpen your mind. Challenge yourself. Learn something new.
      </h4>
      <button className="Start-Quiz text-lg md:text-xl" onClick={handleStartQuiz}>
        Get started
        <div className="btn-icon">
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
  );
};

export default Starter;
