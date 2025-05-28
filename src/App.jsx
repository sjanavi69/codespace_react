import React from 'react';
import './Module 3/Introduction to ReactJS/Ques_6';
import LoginMessage from './Module 3/Introduction to ReactJS/Ques_6';


function App() {
  const userIsLoggedIn = true; // or false

  return (
    <div>
      <h1>My App</h1>
      <LoginMessage isLoggedIn={userIsLoggedIn} />
    </div>
  );
}

export default App;