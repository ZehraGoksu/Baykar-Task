import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Results from './ResultTable';

const App = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Quiz setUserAnswers={setUserAnswers} />} />
          <Route path="/results" element={<Results userAnswers={userAnswers} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
