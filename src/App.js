import React, {Component} from 'react'
import './App.css';
import { registerQuotaErrorCallback } from 'workbox-core';
//import Data from './Data.js'


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      search:''
    }
    
  }
  onChange(ev) {
    this.setState({ search: ev.target.value })
  }

  onSubmit(ev) {
    this.setState({ items: this.state.search })
    fetch(`https:/api.github.com/orgs/${this.state.search}/repos`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

  } 
  
/*
    function Two(){
      const [val, setVal] = useState('');
      const inputRef = useRef();
  
      const submitHandler = (e) => {
        e.prevent.Default();
  
        setVal(inputRef.current.value);
      }
    }
  */
 /*
 <ul> 
          {
            items.map(item => (
                  <li key={item.id} >
                    Name: {item.name} 
                  
                    || Fork: {item.fork}


                        </li>
            ))};
          }
        </ul>
*/
 
 componentDidMount(){
    fetch('https:/api.github.com/orgs/facebook/repos')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  //<componentDidMount />
  
  render () {

    var { isLoaded , items} = this.state;

    if (!isLoaded){
      return <div> Loading... </div>
    }
    else{
      return (
        
     
        <div className="App">
        <form >
            <input  type="text" value={this.state.search}/>
            <button type="submit" onClick={this.onSubmit}>Submit</button>
        </form>

       

        <ul> 
          {
           items.map(item => (
                  <li key={item.id} >
                    Name: {item.name} 
                  
                    || Fork: {item.fork}


                        </li>
            ))};
          }
        </ul>
         </div>
      );
    }
   
  }
}

  /*function App() {
    return (
      <div >
        <h1>Search for repos</h1>
        < Data />
      </div>
    );
  }
*/


export default App;
