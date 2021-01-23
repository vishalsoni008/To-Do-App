import Axios from "axios";

class Tododataservice{

    retriveAlltodos(){
        return Axios.get(`/users/{username}/todos`)
    }
    deleteTodDo(id){
        return Axios.delete(`/users/delete/${id}`);
    }

}
export default new Tododataservice();