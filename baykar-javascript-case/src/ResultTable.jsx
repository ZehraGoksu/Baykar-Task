import React from "react";
import questionsData from "./questions.json";

const ResultTable = ({ userAnswers }) => {
  return (
    <div className="results-container">
      <h2>Sonuçlar</h2>
      <table>
        <thead>
          <tr>
            <th>Soru</th>
            <th>Kullanıcı Cevabı</th>
            <th>Doğru Cevap</th>
          </tr>
        </thead>
        <tbody>
          {questionsData.map((question, index) => (
            <tr key={index}>
              <td>{question.question}</td>
              <td>{userAnswers[index]}</td>
              <td>{question.correctOption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
