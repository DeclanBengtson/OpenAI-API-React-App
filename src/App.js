import './App.css';
import { Configuration, OpenAIApi } from "openai";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from "react";


//Pages
import Home from "./Pages/Home"
import MealPlan from "./Pages/MealPlan";
import Workout from "./Pages/Workout";

//Components
import Header from './Components/Header'
import Footer from './Components/Footer';


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
