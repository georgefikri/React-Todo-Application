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
            /* i called the method handleChange, which is passed into the CheckBoxes component tag
            handleChange={this.handleChange}
            the function inside onChange ==> is the function receiving the event what it does it called props.handleChange
            */
            onChange={()=> props.handleChange(props.all.id)}
            /* the reason the checkboxes working ( check and uncheck ) is because of this below checked property
            checked={} determines whether the checkbox should be checked or not  */
            checked={props.all.completed}/>

            <span>{props.all.text}</span>
          </li>
    )
}

export default CheckBoxes