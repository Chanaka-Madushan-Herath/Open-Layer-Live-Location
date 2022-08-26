import './components/Assets/styles/App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/home/Map" element={<Map/>}/>
          </Routes>
      </div>

  );
}

export default App;
