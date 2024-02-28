import Greet from "./components/Greet";
import "./App.css";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <Greet name="shree" date="124587"/>
      <Greet name="shree" date="124587"/>
      <Greet name="shree" date="124587"/>
      <HookCounter/>
    </div>
  );
}

export default App;
