// import Axios from 'axios';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ApiServices from '../../API/To-do/ApiServices.js';


class Welcome extends Component{

    constructor(props){
        super(props)
        this.state={
            Msg:''
        }
    }
    Getmessage=()=>{
        // Axios.get('/welcome')
        // .then(response=>{
        //     console.log(response)
        //     this.setState({Msg:response.data})
        // })
        ApiServices.executeHelloWorld()
        .then(response=>this.HandleSuccesFullResponse(response))
     }
     HandleSuccesFullResponse=(response)=>{
         console.log(response)
         this.setState({Msg:response.data})
     }

    render(){
        return(
        <div>
            <div className="container">
                welcome {this.props.match.params.name}<br/>
                {/* <h1>List Dodo</h1> */}
                manage some thinng <Link to ="/todos">here</Link> 
             </div>
             
             <div className="container">
                Welcome here to for customized welcome 
                <button className="btn btn-succes bg-dark" onClick={this.Getmessage}> welcome get</button>
             </div>

             <div className="container">
                    {this.state.Msg}
             </div>

        </div>
        );
    }
  
}

export default Welcome;