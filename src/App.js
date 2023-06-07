import React from "react"
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
//Pages
import Home from "./Pages/Home"

//Components

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/Home" element={<Home/>}/>
          <Route path="*" element={<Home to="/Home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
