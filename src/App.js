import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Hi from './Components/Hi'
function App() {
  const name= "raed"
  return (
    <div className="App">
      <Greet></Greet>
      <Hi></Hi>
    </div>
  );
}

export default App;
