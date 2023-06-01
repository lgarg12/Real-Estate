
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import Presidency from './Components/Presidency/Presidency';
import Example from './Components/value/Value';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">

      <Header/>
      <Hero/>
      <Companies/>
      <Presidency/>
      <Example/>
      <Contact/>
    </div>
  );
}

export default App;
