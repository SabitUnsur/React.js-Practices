import './App.css'
import Products from './components/Products';

function App() {
  // const paragraph = document.createElement("p")
  // paragraph.textContent = "Hello World"
  // document.getElementById("root").append(paragraph)
  // bu şekilde yazmak uzun ve zahmetli ve yavaş bir işlem olur. Jsx ile bu işlemi daha kolay yapabiliriz. Jsx bize html ve js kodlarını bir arada kullanmamızı sağlar.
  //props: componentler arasında veri taşımak için kullanılır.

  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
