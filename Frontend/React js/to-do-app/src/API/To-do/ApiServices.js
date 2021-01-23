import Axios from "axios";

class ApiServises{

    executeHelloWorld(){
        //console.log('api call');
        return Axios.get('/welcome');
    }
}
export default new ApiServises();