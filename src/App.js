import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Hi from './Components/Hi'
import Hello from './Components/Hello'
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import User from './Components/User';
import List from './Components/List';
import StyleSheets from './Components/StyleSheets';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
    
function App() {

  return (
    <div className="App">
{/*       <Greet name=' yes'></Greet>
      <Greet name=' no'></Greet>
      <Hi name='Raed'></Hi>
      <Hello></Hello>
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <User></User>
      <List/> */}
      <StyleSheets primary={true}/>
      <Form/>
      <LifeCycleA></LifeCycleA>
    </div>
  );
}

export default App;
