import React from 'react';
import { connect } from 'react-redux';
class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          tasks: []
        }
    }

   
    AddTask = () => {
      this.props.dispatch({
          type: 'ADD_TASK',
          payload: {
            new: { id: '5', task:'test123'}
          }
      })
    }

   
    RemoveTask = () => {
        this.props.dispatch({
            type: 'REMOVE_TASK',
            payload: {
              new: { id: '5', task:'test123'}
            }
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3 style={{padding:"15px",backgroundColor:"orange",color:"white"}}>React Redux</h3>
                <p style={{margin: '2%'}}>Create a react project with CRA, and connect it with redux and make reducer such that you<br/>
                    can add/push tasks in the task array of the initial data or remove certain task from an array.<br/>
                    Below is the initial data object<br/>
                    var initialData = tasks[]<br/>
                    Types:<br/>
                    1. ADD_TASK<br/>
                    2. REMOVE_TASK
                </p>  
                <label style={{marginLeft:"30px",color:"green"}}>This is component's state {this.state.tasks}</label> <br />
                <input type="text" placeholder="Enter task name" style={{marginLeft:"30px",color:"green",width:"500px",height:"40px"}}/><br /><br/>
                <button style={{marginLeft:"30px",backgroundColor:"green",padding:"3px",width:"100px"}} onClick={this.AddTask.bind(this)}>Add</button>
                {/* <button onClick={this.RemoveTask.bind(this)} >Remove</button> */}
                <ul style={{marginLeft:"30px",color:"green"}}>
                  {this.props.tasks.map(task => <li>{task.task} <a href="#" onClick={this.RemoveTask.bind(this)}>Remove</a></li>)}
                </ul> 
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
      tasks: state.tasks
    }
}

// const connect = (mapStateToProps,mapDispatchToProps) => {
//     return function (Component) {

//     }
// }
export default connect(mapStateToProps)(App);
