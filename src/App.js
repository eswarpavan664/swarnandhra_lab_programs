import logo from './logo.svg';
import './App.css';
import Program_1 from './Lab_Programs/Program_1';
import Greet from './Lab_Programs/Program_2';
import Welcome from './Lab_Programs/Program_3';
import { Hello_With_JSX, Hello_Without_JSX } from './Lab_Programs/Program_4';

function App() {
  return (
    <div className="App">
     <Program_1/>
     {/* <Greet/> */}
     {/* <Welcome/> */}
     {/* <Hello_With_JSX/> */}
     {/* <Hello_Without_JSX/> */}
    </div>
  );
}

export default App;
