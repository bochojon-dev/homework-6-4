import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Icons from "./components/icons/Icons";
import Work from "./components/work/Work";
import Stage from "./components/stage/Stage";
import Customers from "./components/customers/Customers";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Icons />
      <Work />
      <Stage />
      <Customers />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
