import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import EventFunctional from './components/EventFunctional';
import EventClass from './components/EventClass';
import NestingComponents from './components/NestingComponents';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <StatefulGreeting greeting="I'm a stateful class component" name="Frank"/> */}
      {/* <EventFunctional />
      <EventClass /> */}
      {/* <NestingComponents /> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <ControlledForm /> */}
      <UncontrolledForm />
    </div>
  );
}

export default App;
