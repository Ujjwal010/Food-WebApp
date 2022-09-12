
import './App.css';
import Navbar from './components/Navbar';
import Food from './components/Food';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Food/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
