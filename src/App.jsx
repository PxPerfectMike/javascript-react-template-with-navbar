import React from 'react';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

    </React.Fragment >
  );
}

export default App;
