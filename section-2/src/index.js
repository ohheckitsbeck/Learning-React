//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React component
const App = function() {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label htmlFor="fullName" className="label">Enter Name: </label>
      <input type="text" id="fullName" name="fullName" />
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
}

//Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);