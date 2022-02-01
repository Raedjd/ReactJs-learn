import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Hi from './Components/Hi'
import Hello from './Components/Hello'
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {

  return (
    <div className="App">
      <Greet name=' yes'></Greet>
      <Greet name=' no'></Greet>
      <Hi name='Raed'></Hi>
      <Hello></Hello>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
