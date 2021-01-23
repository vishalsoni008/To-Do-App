import React,{Component} from 'react';
import Tododataservice from '../../API/To-do/Tododataservice';

class ListToDoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todo:[],
            message:null
        }
    }
    componentDidMount(){
       this.refreshToDo();
    }

    refreshToDo=()=>{
        Tododataservice.retriveAlltodos()
        .then(
            response=>{
                //console.log(response)
                this.setState({todo :response.data})
            }
        )
    }

    deleteClikedToDo=(id)=>{
        console.log(id);
        Tododataservice.deleteTodDo(id)
        .then(
            response=>{
                this.setState({message:`delete todo ${id} succesful`});
                this.refreshToDo();
            }
        )
    }
   

    render(){
        return( 
            <div>
                <h1>List of To-Do</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map(
                                todos=>
                                <tr key={todos.id}>
                                {/* <td>{todos.id}</td> */}
                                <td>{todos.description}</td>
                                <td>{todos.done.toString()}</td>
                                <td>{todos.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={()=>this.deleteClikedToDo(todos.id)}>Delete</button></td>
                            </tr>
                            )
                        
                         }
                    </tbody>
                </table>
                </div>
            </div>
        );
        }
}






export default ListToDoComponent;