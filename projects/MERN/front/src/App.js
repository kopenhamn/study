import React, { useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useRoutes } from './routes';
import { getUser } from './services/auth';

function App() {
  const isAuth = useMemo(() => getUser(), [])

  return (
    <Router>
      <div className="App">
        {useRoutes(isAuth)}
      </div>
    </Router>
  );
}

export default App;
