import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Home} />
     </Router>
    </div>
  );
}

export default App;
