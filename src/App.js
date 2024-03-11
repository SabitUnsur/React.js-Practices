import logo from './logo.svg';
import './App.css';

function App() {
  // const paragraph = document.createElement("p")
  // paragraph.textContent = "Hello World"
  // document.getElementById("root").append(paragraph)
  // bu şekilde yazmak uzun ve zahmetli ve yavaş bir işlem olur. Jsx ile bu işlemi daha kolay yapabiliriz. Jsx bize html ve js kodlarını bir arada kullanmamızı sağlar.

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
