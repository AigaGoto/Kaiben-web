import React from 'react';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Indicator from "./components/Indicator"
import Logs from "./components/Logs";
import RegisterShit from "./components/RegisterShit";
import SugguestFood from "./components/SugguestFood";
import SugguestReason from "./components/SugguestReason";

import './App.css';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sugguestFood" element={<SugguestFood />} />
                    <Route path="/sugguestReason" element={<SugguestReason />}/>
                    <Route path="/indicator" element={<Indicator />}/>
                    <Route path="/registerShit" element={<RegisterShit />}/>
                    <Route path="/logs" element={<Logs />}/>
                  </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;
