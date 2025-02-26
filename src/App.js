import './App.css';
import About from './component/About';
import Gallery from './component/Gallery';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Gallery/>
      <Footer/>
     
    </div>
  );
}

export default App;
