import './App.css';
import First from './components/First';
import Second from './components/Second';
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import Third from './components/Third';
import Submited from './components/Submited';

function App() {
  return (

    <div className="App">
      
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third/>}/>
          <Route path="/submit" element={<Submited/>}/>

        </Routes>
    </div>
  );
}

export default App;
