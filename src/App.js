import './App.css';
import Counter from '../src/Component/Counter';
import Stopwatch from '../src/Component/Stopwatch';

function App() {
  return (
    <div className="App">
      
        
        <Counter startTime={1} endTime={20}/>
        <Stopwatch/>
      
    </div>
  );
}

export default App;