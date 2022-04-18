import React,{useState,useEffect, Component} from 'react';

class Ap extends Component(){
  //  const [org, setOrg] = useState("facebook")
   //const [orgInfo , setOrgInfo] = useState({});
  //  const url = 'https:/api.github.com/orgs/' + + '/repos';
  constructor() {
    super();
    this.state = {
     org: '',
     orgName: '',
     isLoaded: false,
     items: []
    }
    this.handlechange = this.handlechange.bind(this);
  }

    handlechange(e) {
        this.setState({org: e.target.value});

      }

   // const getOrg = (event) => {
        /*if(event.key === "Enter"){
            fetch(`https:/api.github.com/orgs/${org}/repos`)
            .then((response) =>{
                //response.json())
                console.log(response.json());
             //   setOrgInfo(response.json())
            } )
           .then( data  => {
               setOrgInfo(data)
               console.log(data);
           }
            )
        }*/

    //}
    componentDidMount() {
      const  orgName = this.state.org;
        fetch(`https:/api.github.com/orgs/${orgName}/repos`)
          .then(response => response.json())
          .then(data => this.setState({
           isLoaded: true,
        items: data.items }) )
          .catch(error => console.log('failed to fetch', error));
      }
    /*
        const handleFetch = () =>
        {
            fetch(`https:/api.github.com/orgs/${org}/repos`)
            .then((response) => response.json())
            .then((data) => setOrgInfo({
               //console.log(results)
                   name: data.name,
                   watchers: data.watchers,
                   forks: data.fork,
                   license: data.license.key,
               }));
            };
*/


      /*const handleInputChange = event =>{
            let inputValue = event.target.value;
            console.log(event.target.value); // You will the value here. you can simply pass the value to the function
            setInputValue(inputValue);
            getWeather(inputValue);
        }
    */
        render() {
            const { error, isLoaded, items } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                  <div>
                      <input type='text' onChange={this.handlechange}/>
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      {item.name} {item.price}
                    </li>
                  ))}
                </ul>
                );
                  </div>
              )
            }
            
        }
    }




        
    


export default Ap;