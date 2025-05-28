// Conditional Rendering
// Description: Implement a component that renders different messages based on a passed isLoggedIn prop.

// Step 1: Write your code within the file, by the name of component as LoginMessage
// Step 2: Modify the App.js to use LoginMessage with a boolean prop

import React from 'react';

function LoginMessage(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>Welcome back, user!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </div>
  );
}

LoginMessage.propTypes = {
 isLoggedIn : PropTypes.bool.isRequired,
};


export default LoginMessage;
