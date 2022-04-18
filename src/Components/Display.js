import React, {useLocation} from "react";
/*
  
               <ul> 
             {
              info.map(dummy => 
               (
                     <li key={dummy.id} >
                       Name: {dummy.name} 
                     
                       || Fork: {dummy.fork ? "true" : "false"} || Owner: {dummy.owner.login}
                       || Avatar: {} || Open Issues: {dummy.open_issues_count}} ||Image: <img src={dummy.owner.avatar_url} alt=""/>
    
                           </li>
                                      
                         
               ))
    
             }
           </ul>*/

function Display(){
  //const info =[];
  const location = useLocation()
  const { items } = location.state
  console.log(items);

    return (
      
        
      <div>
           
      <span>This is the Data Page</span>
           
          
         {
           
          items.map(dummy => 
           (
            
            <tr>
            <th scope="row" key={dummy.id}>{dummy.id}</th>
            <td> Name: {dummy.name} </td>
            <td> Fork: {dummy.fork ? "true": "false"}</td>
            <td>Owner: {dummy.owner.login}</td>
            <td>Open Issues Count: {dummy.open_issues_count}</td>
        </tr>
                        
                     
           ))

           
         }
       
     
    </div>
   
              
       );
}

export default Display;