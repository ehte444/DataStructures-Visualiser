import React from 'react';
import Layout from './components/Layout/Layout'; 
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div style={{overflow:'hidden'}}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Dashboard} />
          <Route path='/array' exact component={Layout} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
