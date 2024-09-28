import React, { useState } from "react";
import Answer from "./Answer";
import "./App.css";

function MathQuiz() {
    const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);

   function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setScore(score + 1);
      alert("Правильно!");
    } else {
      setScore(score - 1);
      alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
    }
      setA(generateRandomNumber());
    setB(generateRandomNumber());
  };
  return (
    <div className="quiz-container">
            <h1>Ваши очки: {score}</h1>
      <h1> {a} + {b} = ?</h1>
      <Answer updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
