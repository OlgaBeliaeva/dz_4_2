import React, { useState } from "react";

function Answer({ updatePoints }) {
  const [userAnswer, setUserAnswer] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer(""); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  );
}

export default Answer;