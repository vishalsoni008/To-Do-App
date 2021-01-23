class AuthenticationService{
    registerSucessfulLogin(username,password){
        console.log('register sucessfully');
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
    IsUserLoggedIn(){

        let user=sessionStorage.getItem('authenticatedUser')
        if(user===null){
             return false;
            }

        return true;
    }

}
export default new AuthenticationService();