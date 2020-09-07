import React from "react";
import "./user.css";


const User = (props) => {
 
    return (
        <div className="user">
            <h3>Fill the list:</h3>
            <p>Name: {props.name};</p>
            <p>Age: {props.age};</p>
            <p>Hobby: {props.hobby};</p>
            <input type="text" onChange={props.changed}/>
            
        </div>
    );
}
export default User;