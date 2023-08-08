import "./App.css";
import BookCards from "./components/BookCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="bookSection">
        <BookCards />
      </div>
    </div>
  );
}

export default App;
