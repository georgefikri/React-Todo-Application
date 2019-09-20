import React from 'react';
import './App.css';

/* importing component */
import CheckBoxes from "./components/ToDoCheckBoxes"

/* importing data from our fake API */
import toDoData from "./components/toDoData"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            toDos: toDoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    /* id here is from the toDoData ( Fake API ) */
    handleChange(id){
        /* the trickiest part of this that we are dealing with an entire array 
        because we are saving an array in our state we never wanna modify state directly  */
        this.setState((previousState)=>{
            /* then i will use .map() to loop through 
            previousState.toDos (previousState el state el adima | toDos <= object property)
            and look for a toDo with the id ( el parameter fe handleChange function ) */
            let updated = previousState.toDos.map((todo)=>{
                /* 
                todo.id <= todo: represent each element( object ) of toDoData array of objects.
                id <= the id passed to handleChange method
                if both of them are equal we wanna change the status ( inside toDoData completed: true /false)
                */
                if(todo.id  === id ){
                     todo.completed = !todo.completed
                }
                /* whether or not we did that change true to false ( toDoData completed) we return the todo 
                (map method parameter).
                this return add the todo returns into our updated variable  */
                return todo
            })
            /* return new version of state  */
            return {
                toDos: updated // updated is the variabled elly shayel .map
            }
        })
    }

    render(){
        let toDo = this.state.toDos.map((item)=>{
            return  <CheckBoxes key={item.id} all={item} handleChange={this.handleChange} />
         })
        return (
            <div className="TodoList">
              <ul>
                 {toDo}
              </ul>
               
            </div>
          );
    }
}

export default App