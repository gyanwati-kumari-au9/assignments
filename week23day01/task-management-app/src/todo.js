import React from 'react';
import { connect } from 'react-redux';
import TodoItems from './todoItems';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:"",
            task: "",
            editing:""
        }
    }
    
    changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name]: value
        });
    }

    addTask = () => {
        console.log('addTask')

        if(!this.state.task) {
            this.setState({
                error: 'Please enter the task.'
            })
        }
        else if(this.props.todos.includes(this.state.task)){
            this.setState({
                error: 'Please enter the a new task.'
            })
        }
        else if(this.state.task.length < 10) {
            this.setState({
                error: 'Task must have atleat 10 characters.'
            })
        }
        else {
            if (this.state.editing && this.state.editing.length>0) {
                // console.log(this.state.editing);
                this.props.dispatch({
                    type: 'EDIT_POST',
                    payload: {
                        newVal: this.state.task,
                        oldVal: this.state.editing
                    }
                });
                this.setState({
                    error:'',
                    task:'',
                    editing:''
                })
            }else{
                this.props.dispatch({
                    type: 'ADD_TASK',
                    payload: this.state.task
                });
                this.setState({
                    error:'',
                    task:'',
                })
            }
        }

    }

    editingTask = (task) => {
        this.setState({editing: task, task})
    }

    render() {
        return (
            <div>
                <h3 style={{width:"100%",padding:"15px",color:"white",backgroundColor:"steelblue"}}>{this.props.title}</h3>
                <div>
                    <input style={{width:"800px",height:"25px",border:"2px solid green",margin:"50px"}} name="task" value={this.state.task} onChange={this.changeHandler}/>
                    {this.state.editing && this.state.editing.length>0 ? <button style={{backgroundColor:"green",color:"white",height:"30px",width:"100px"}} onClick={this.addTask}>Update Task</button> : <button style={{backgroundColor:"green" ,color:"white",height:"30px",width:"100px"}} onClick={this.addTask}>Add Task</button>}
                    
                </div>
                {
                    this.state.error &&
                    <div>
                        <span>{this.state.error}</span>
                    </div>
                }
                <TodoItems editingTask={this.editingTask} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state
    }
}
export default connect(mapStateToProps)(Todo);