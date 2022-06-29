import logo from './logo.svg';
import './App.css';

import H3 from './comp/name';
import Input from './input/input';

const conatiner = { color: "yellow", border: "1px solid red", paddingTop: "5px", paddingBottom: "5px", width: "300px" }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={conatiner}>Name List</div>
        <H3 firstname='saravan' lastname='kumar'></H3>
        <Input placeholder="enter the value" type="text"></Input>






      </header>
    </div>
  );
}

export default App;
