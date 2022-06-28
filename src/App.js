import logo from './logo.svg';
import './App.css';

const conatiner = { color: "yellow", border: "1px solid red", paddingTop: "5px", paddingBottom: "5px", width: "300px" }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={conatiner}>Name List</div>
        <div style={conatiner}>Ram</div>
        <div style={conatiner}>Kumar</div>
        <div style={conatiner}>sam</div>
      </header>
    </div>
  );
}

export default App;
