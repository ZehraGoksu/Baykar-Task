import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [quizData, setQuizData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);  

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);  
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBtn = (option) => {
    handleButtonClick();
    handleOptionSelect(option);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setQuizData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleNextQuestion = useCallback(() => {
    setIsAnswered(false);
    setSelectedOption("");
    if (currentQuestion < pageSize - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
       
    } 
    setTimeRemaining(30);
  }, [currentQuestion, pageSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        clearInterval(interval);
        setIsAnswered(true);
        handleNextQuestion();  
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAnswered, handleNextQuestion]);

  const displayedQuestions = quizData.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Quiz App</h1>
      {displayedQuestions.length > 0 &&
      currentQuestion < displayedQuestions.length ? (
        <div>
          <p>{displayedQuestions[currentQuestion].title}</p>
          <ul>
            {displayedQuestions[currentQuestion].body
              .split("\n")
              .map((option, index) => (
                <li key={index} type="A">
                  <button id={displayedQuestions[currentQuestion].id}
                    className={`btn btn-light ${isActive ? "active" : ""}`}
                    type="button"
                    onClick={() => handleBtn(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                </li>
              ))}
          </ul>
          <p>Time Remaining: {timeRemaining} seconds</p>
        </div>
      ) : (
        <div>No questions available!</div>
      )}
    </div>
  );
};

export default Quiz;
