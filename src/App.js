
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const url = `https://via.placeholder.com/150`
  
  
  return (
    <div className="App">
    <h1>Olá react!</h1>
    <p>Meu primeiro App</p>
    <img src={url} alt=""></img>
    <HelloWorld/>
    </div>
  );
}

export default App;
