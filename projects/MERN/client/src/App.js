import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useRoutes } from './routes';
import { getUser } from './services/auth';

function App() {
  return (
    <Router>
      <div className="App">
        {useRoutes(getUser())}
      </div>
    </Router>
  );
}

export default App;
