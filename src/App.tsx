import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage/LandingPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path={"/"} Component={LandingPage} />
      </Routes>
      // <LandingPage/>
  );
}

export default App;
