import React from 'react';
import Layout from './components/TheArray/Layout'; 
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Route} from 'react-router-dom';
import StackLayout from './components/Stack/StackLayout';
import QueueLayout from './components/Queue/QueueLayout';
import ListLayout from './components/LinkedList/ListLayout';

function App() {
  return (
    <div style={{overflow:'hidden'}}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Dashboard} />
          <Route path='/array' exact component={Layout} />
          <Route path='/stack' exact component={StackLayout} />
          <Route path='/queue' exact component={QueueLayout} />
          <Route path='/linked' exact component={ListLayout} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
