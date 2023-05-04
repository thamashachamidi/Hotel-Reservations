import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero'; 
import {BrowserRouter , Router , Link} from 'react-router-dom'
import Homescreen from './screens/homscreen';
function App() {
  return (
    <div className="App"> 
     <Hero/>
     <BrowserRouter>
     <Route path = "/home" exact componet = {Homescreen}/>
     </BrowserRouter>

     
    </div>
  );
}

export default App;

