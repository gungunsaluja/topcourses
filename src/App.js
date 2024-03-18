import logo from './logo.svg';
import './App.css';
import{apiUrl , filterData} from "./data";

const App = ()=> {

  
  return (
   <div>
    <Navbar/>

   <Filter filterData  />

   <Cards/>
   </div>
  );
}

export default App;
