import React,{Component} from 'react';
import Welcome from './Welcome';
import LoginComponent from './LoginComponent'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import ListToDoComponent from './ListToDoComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import AuthenticatedRoute from './AuthenticatedRoute';


class Todoapp extends Component{
    render(){
        return(
            <div className="Todoapp">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                             <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/todos" component={ListToDoComponent} />
                            <Route  component={ErrorComponent} />
                        </Switch>
                    <FooterComponent/>
                </Router>

                {/* <LoginComponent/>
                <Welcome /> */}
 
            </div>
        );
    }
}
function ErrorComponent(){
    return <div> error coured contact to support </div>
}
class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>you are Log out</h1>
                <div className="container">
                    Thank you for Using our application
                </div>
            </div>
        );
    }
}


export default Todoapp;