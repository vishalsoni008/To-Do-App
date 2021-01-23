import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService';


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            hasLoginFailed:false,
            LoginSucess:false
        }
       // this.handleUsernamechange=this.handleUsernamechange.bind(this)
    }

    changeHandler=e=>{
        console.log(this.state);
        this.setState({[e.target.name]:e.target.value})
    }
    loginCicked=e=>{
        if(this.state.username==='vishal' && this.state.password==='vishal'){
                AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)

            
            // this.setState({LoginSucess:true})
            // this.setState({hasLoginFailed:false})
        }
        else{


             this.setState({LoginSucess:false})
             this.setState({hasLoginFailed:true})
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
               <div className="container">
                    {/* <ShowinvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowinvalidCredentials>
                    <ShowLoginSucess LoginSucess={this.state.LoginSucess}></ShowLoginSucess> */}

                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
                    User Name:<input type="text" name="username" value={this.state.username} onChange={this.changeHandler}></input><br/>
                    Password:<input type="Password" name="password" value={this.state.password} onChange={this.changeHandler}></input><br/>
                    <button className="button btn btn-sucess bg-dark" onClick={this.loginCicked}>Login</button>
                </div>
            </div>
        );
    }
 
}

// function ShowLoginSucess(props){
//     if(props.LoginSucess){
//         return <div>Login Sucessfully</div>
//     }
//     return null;
// }

// function ShowinvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>InValid</div>
//     }
//     return null;
// }

export default LoginComponent;