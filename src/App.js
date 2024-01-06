import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Navbar/>
      <body style={{minHeight:"600px"}}>
        <Home/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
