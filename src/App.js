import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
//Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [ModeText, setModeText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null);

  const processAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      setModeText('Enable Light Mode');
      processAlert("Dark Mode Enabled", "success");
      // document.title = "TextHelper Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setModeText('Enable Dark Mode');
      processAlert("Light Mode Enabled", "success");
      // document.title = "TextHelper Light Mode"

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextHelper" mode={Mode} toggleMode={toggleMode} ModeText={ModeText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/"
              element={<TextForm processAlert={processAlert} heading="Enter the text to analyse" />} ></Route>
            <Route exact path="/about" element={<About />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
