import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <StatefulGreeting greeting="I'm a stateful class component" name="Frank"/>
    </div>
  );
}

export default App;
