// import logo from './logo.svg';
import './App.css';
import Todoapp from './Component/To-do/Todoapp';
// import Counter from "./Component/Counter/Counter"
// import './bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/To-do/allinone.css'

function App() {
  return (
    <div className="App"> 
      {/* <Counter/> */}
      <Todoapp/>
    </div>
  );
}

export default App;
