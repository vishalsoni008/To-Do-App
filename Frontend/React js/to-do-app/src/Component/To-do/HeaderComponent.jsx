import AuthenticationService from "./AuthenticationService.js";

const { Component } = require("react");
const { Link } = require("react-router-dom");

class HeaderComponent extends Component{
    render(){
        const IsUserLoggedIn=AuthenticationService.IsUserLoggedIn();
        //console.log(IsUserLoggedIn);
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>ToDoapp</div>
                    <ul className="navbar-nav">
                        {IsUserLoggedIn && <li className="nav-link"><Link to="/welcome/vishal"> Home</Link></li>}
                        {IsUserLoggedIn && <li className="nav-link"><Link to="/todos"> ToDos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!IsUserLoggedIn && <li className="nav-link"><Link to="/login"> Login</Link></li>}
                        {IsUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}> Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;