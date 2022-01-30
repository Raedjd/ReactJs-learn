import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Hi from './Components/Hi'
import Hello from './Components/Hello'
function App() {

  return (
    <div className="App">
      <Greet name=' yes'></Greet>
      <Greet name=' no'></Greet>
      <Hi></Hi>
      <Hello></Hello>
    </div>
  );
}

export default App;
