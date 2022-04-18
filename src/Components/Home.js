
import React , { useState} from "react";
import axios from 'axios'; 
import {Link} from "react-router-dom";
import Display from "./Display";

function Home(){

  const [info, setInfo] = useState([]);
  const [orgName, setOrg] = useState([]);
  const [dataToMove, setDataToMove] = useState([]);

  let signal = axios.CancelToken.source();

  function handleChange(event) {
      setOrg(event.target.value);
  }

  function handleClick(event) {
      axios.get(`https:/api.github.com/orgs/${orgName}/repos`, {
          cancelToken: signal.token,
      })
          .then(res => {
              const info = res.data;
              setInfo(info);
              setDataToMove(info);
              console.log(info);
          }).catch(err => {
          console.log(err);
      });
  }

  const parentToChild = () => {
    let data ={};
    data = dataToMove;
  }
  let getInfo = info;
    return (
      
   
        <div>
          <span>Enter User Id</span>
               <input type="text" onChange={handleChange}/>
               <button onClick={handleClick}>Get Data from url..Make API Call</button>
               <button onClick={parentToChild} > Go to Display Page</button>
              
             {
               
              getInfo.map(dummy => 
               (
                
                <tr>
                <th scope="row" key={dummy.id}>{dummy.id}</th>
                <td> Name: {dummy.name}<button>
                  <Link to={{
                     pathname: "/display",
                      state: {
                      items: info,
                         },}}> Press </Link></button></td>
                <td> Fork: {dummy.fork ? "true": "false"}</td>
                <td>Owner: {dummy.owner.login}</td>
                <td>Open Issues Count: {dummy.open_issues_count}</td>
            </tr>
                            
                         
               ))
    
               
             }
        
           
         
        </div>
       
                       
              
       );
}

export default Home;

