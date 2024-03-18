
import './App.css';
import{apiUrl , filterData} from "./data";
import React,{ useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from "./components/Cards";
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const App = () => {
const [courses, setCourses] = useState(null);
 
   async function fetchData(){
      try{

       let res = await fetch(apiUrl);
      let output = await res.json();
        // save data into a variable
        // console.log(output);
        setCourses(output.data);

      }
      catch(error){

        toast.error("something went wrong");
      }
    }

   useEffect(()=>{
    fetchData();
   },[])
  
  return (
   <div>
    <div> 
    <Navbar/>
</div>
<div>
   <Filter filterData={filterData}  />
</div>
<div>
   <Cards courses = {courses}/>
   </div>
   </div>
  );
}

export default App;
