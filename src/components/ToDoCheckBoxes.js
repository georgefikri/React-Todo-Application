import React from "react"
/* import react for the JSX to work */

function CheckBoxes(props){


    return (
          <li className= {props.all.completed ? "completed" : null}>
            <input 
            type="checkbox"
            name="checkbox"
            id="checkbox1"
            value="value" 
            onChange={()=> props.handleChange(props.all.id)}
            checked={props.all.completed}/>

            <span>{props.all.text}</span>
          </li>
    )
}

export default CheckBoxes