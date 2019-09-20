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

        this.setState((previousState)=>{

            let updated = previousState.toDos.map((todo)=>{

                if(todo.id  === id ){
                     todo.completed = !todo.completed
                }

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