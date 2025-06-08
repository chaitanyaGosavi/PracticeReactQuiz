import { useEffect, useReducer } from "react";
import { quizData } from "../data/questions";

import "./App.css";
import "./loader.css";
import HeaderSection from "./Components/HeaderSection";
import Starter from "./Components/Starter";
import Loading from "./Components/Loading";
import QuestionCnt from "./Components/QuestionCnt";
import Summary from "./Components/Summary";

function App() {
  const iniitialState = {
    questions: [],
    //loading, ready, error, finished
    status: "loading",
    questionIndex: 0,
    answer: null,
    pointsEarned: 0,
  };

  const quizReducer = function (state, action) {
    switch (action.type) {
      case "dataLoading":
        return {
          ...state,
          status: "loading",
        };
      case "dataFetchSuccess":
        return {
          ...state,
          status: "ready",
          questions: action.payload,
        };
      case "startQuiz":
        return {
          ...state,
          status: "active",
        };
      case "newAnswer":
        return {
          ...state,
          answer: action.payload,
          pointsEarned: state.pointsEarned + action.pointsEarned,
        };
      case "nextQuestion":
        return {
          ...state,
          questionIndex: action.payload.nextIndex,
          status: "active",
          answer: null,
        };
      case "finished":
        return {
          ...state,
          status: "finished",
        };
      case "restart":
        return {
          questionIndex: 0,
          answer: null,
          pointsEarned: 0,
          questions: state.questions,
          status: "ready",
        };

      default:
        break;
    }
  };

  const [
    { questions, status, questionIndex, answer, pointsEarned },
    quizDispatch,
  ] = useReducer(quizReducer, iniitialState);
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    setTimeout(() => {
      quizDispatch({ type: "dataFetchSuccess", payload: quizData.questions });
    }, 2000);
  }, []);

  return (
    <div className="App w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <HeaderSection />
      {status === "loading" ? (
        <Loading />
      ) : status === "ready" ? (
        <Starter quizDispatch={quizDispatch} />
      ) : status === "active" ? (
        <QuestionCnt
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          answer={answer}
          quizDispatch={quizDispatch}
          totalQuestions={totalQuestions}
          totalPoints={totalPoints}
          pointsEarned={pointsEarned}
        />
      ) : status === "finished" ? (
        <Summary
          totalPoints={totalPoints}
          pointsEarned={pointsEarned}
          quizDispatch={quizDispatch}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
