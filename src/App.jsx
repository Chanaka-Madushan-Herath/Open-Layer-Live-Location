import './components/Assets/styles/App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/Open-Layer-Live-Location" element={<Login/>}/>
              <Route path="/Open-Layer-Live-Location/home" element={<Home/>}/>
              <Route path="/Open-Layer-Live-Location/Map" element={<Map/>}/>
          </Routes>
      </div>

  );
}

export default App;
