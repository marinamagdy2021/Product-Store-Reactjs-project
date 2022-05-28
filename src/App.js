import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
function App() {

  let List  = [
    {id:1,name:"sun flower",quantity:5,prductimag:"images/1.jpg",productDesc:"aaa"},
    {id:2,name:"butterfly",quantity:5,prductimag:"images/2.jpg",productDesc:"bbb"},
    {id:3,name:"pumma",quantity:5,prductimag:"images/3.jpg",productDesc:"ccc"},
    {id:4,name:"tree paper",quantity:5,prductimag:"images/4.jpg",productDesc:"ddd"},
    ];


  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    
      <Table Data={List} />
    </div>
  );
}

export default App;
