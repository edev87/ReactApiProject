import React, {useEffect, useState} from "react";
import axios from 'axios';


function Data() {
    const [info, setInfo] = useState([]);
    const [org, setOrg] = useState([]);
    let signal = axios.CancelToken.source();

    function handleChange(event) {
        setOrg(event.target.value);
    }

    function handleClick(event) {
        axios.get(`https:/api.github.com/orgs/${org}/repos`, {
            cancelToken: signal.token,
        })
            .then(res => {
                const info = res.data;
                setInfo(info);
                console.log(info);
            }).catch(err => {
            console.log(err);
        });
    }
    return (
      
     <div>
       <span>Enter User Id</span>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Get Posts By User</button>
            <ul> 
          {
           info.map(dummy => 
            (
                  <li key={dummy.id} >
                    Name: {dummy.name} 
                  
                    || Fork: {dummy.fork ? "true" : "false"} || Owner: {dummy.owner.login}
                    || Avatar: {} || Open Issues: {dummy.open_issues_count}} ||Image: <img src={dummy.owner.avatar_url} />


                        </li>
                                   
                      
            ))

          }
        </ul>

     </div>
          
           
           
    );
}
export default Data;