import './App.css';
import NavBar from "./components/NavBar"
import Hero from "./components/File"

function App() {
  return (
    <div className="total">
      <NavBar/>
      <section className="con"> 
          <Hero/>
      </section>
    </div>
  )
};

export default App;
