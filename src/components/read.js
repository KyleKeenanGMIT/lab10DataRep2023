import { useEffect } from "react";
import Books from "./books";
import axios from "axios";//axios import, use npm install axios in cmd prompt
import { useState } from "react";

function Read(){
//empty array - data = empty array
    const [data, setData] = useState([]);//use state imported, data, setData = useState.


    useEffect(//reacthook, sync with external system.
     ()=>{
    axios.get('http://localhost:4000/api/books')//axios imported, getting api request, axios is a promised based http client. //replaced jsonblob with localhost - http request being made with axios
    .then(
        (response)=>{//calling the response.
         setData(response.data);//setdata = response.data.books, only pulling part of the data with .books - change to myBooks - mybooks now removed, array has no name thats being pulled from mongo db
        }//call back function
    )
    .catch(
        (error)=>{
            console.log(error);//logs error if response doesnt work.
        }//call back function
    )
     },[]   
    );



    
    const ReloadData = (e)=>{//reacthook, sync with external system.
  
    axios.get('http://localhost:4000/api/books')//axios imported, getting api request, axios is a promised based http client. //replaced jsonblob with localhost - http request being made with axios
    .then(
        (response)=>{//calling the response.
         setData(response.data);//setdata = response.data.books, only pulling part of the data with .books - change to myBooks - mybooks now removed, array has no name thats being pulled from mongo db
        }//call back function
    )
    .catch(
        (error)=>{
            console.log(error);//logs error if response doesnt work.
        }//call back function
    )
     }   

    
               

    return(
        <div>
            <h2>Hello from the read component</h2>
           <Books myBooks={data}> Reload={ReloadData}</Books> {/* book data added to myBooks array reload is requested if any data has been removed*/} 
        </div>
    );
}
export default Read;