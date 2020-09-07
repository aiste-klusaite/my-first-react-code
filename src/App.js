import React, { useState } from 'react';
import './App.css';
import User  from './user/user.js';

 const App = () => {

  const [userInput, setUserOutput] = useState({
    users: [
     {name: '_________', age: '_________', hobby: '_________'},
     {name: '_________', age: '_________', hobby: '_________'},
     {name: '_________', age: '_________', hobby: '_________'}
    ]
  });

   const changeTheText = () =>{
    setUserOutput({
      users: [
        {name: 'Darija', age: '22', hobby: 'riding'},
        {name: 'Giedre', age: '25', hobby: 'golf'},
        {name: 'Ilona', age: '26', hobby: 'skiing'}
       ]
    });

    }


    const changeName = (event) => {
      setUserOutput({
        users: [
          {name: event.target.value, age: '________', hobby: '________'},
          {name: '_________', age: '_________', hobby: '_________'},
           {name: '_________', age: '_________', hobby: '_________'}
         ]
      });
    }

    const changeAge = (event) => {
      setUserOutput({
        users: [
          {name: '_________', age: '_________', hobby: '_________'},
          {name: '________', age: event.target.value, hobby: '________'},
          {name: '_________', age: '_________', hobby: '_________'}
          
         ]
      });
    }
    const changeHobby = (event) => {
      setUserOutput({
        users: [
          {name: '_________', age: '_________', hobby: '_________'},
          {name: '_________', age: '_________', hobby: '_________'},
          {name: '________', age: '________', hobby: event.target.value}
         ]
      });
    }
  return (
    <div className="App">
        <h1>CODING CHALLENGE 1</h1>
        <User 
        name={userInput.users[0].name}
        age={userInput.users[0].age}
        hobby={userInput.users[0].hobby}
        add={changeTheText}
        changed={changeName}
        />
        <User 
        name={userInput.users[1].name}
        age={userInput.users[1].age}
        hobby={userInput.users[1].hobby}
        add={changeTheText}
        changed={changeAge}
        />
        <User 
        name={userInput.users[2].name}
        age={userInput.users[2].age}
        hobby={userInput.users[2].hobby}
        add={changeTheText}
        changed={changeHobby}
        />
        <button onClick={changeTheText}>Update Info</button><br />
    </div>
  );
}

export default App;
