import React from "react"
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

//Pages
import Home from "./Pages/Home"
import MealPlan from "./Pages/MealPlan";
import Workout from "./Pages/Workout";

//Components
import Header from './Components/Header'
import Footer from './Components/Footer';

//API KEY
const OPENAI_API_KEY="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";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path ="/Home" element={<Home/>}/>
          <Route path ="/MealPlan" element={<MealPlan/>}/>
          <Route path ="/Workout" element={<Workout/>}/>
          <Route path="*" element={<Home to="/Home" replace />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
