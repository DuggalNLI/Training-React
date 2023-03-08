import './App.css';
import Gallery from './Components/Gallery';
import Clock from './Clock';
import Greeting from './Components/Greeting';

function App(props) {
  return (
    <>
      <Gallery/>
      <Clock/>
      <Greeting isLoggedIn = {true}/>
    </>
  );
}

export default App;
