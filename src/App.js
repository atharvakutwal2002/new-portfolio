import logo from './logo.svg';
import classes from './App.module.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div >
      <Navbar/>
      <body  className={classes.mainBody}>
        {/* <Home/> */}
        <About/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
