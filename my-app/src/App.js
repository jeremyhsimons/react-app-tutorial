import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import EventFunctional from './components/EventFunctional';
import EventClass from './components/EventClass';
import NestingComponents from './components/NestingComponents';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <StatefulGreeting greeting="I'm a stateful class component" name="Frank"/> */}
      {/* <EventFunctional />
      <EventClass /> */}
      <NestingComponents />
    </div>
  );
}

export default App;
