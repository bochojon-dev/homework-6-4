import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Icons from "./components/icons/Icons";
import Work from "./components/work/Work";
import Stage from "./components/stage/Stage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Icons />
      <Work />
      <Stage />
    </div>
  );
}

export default App;
