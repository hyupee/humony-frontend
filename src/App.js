import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
              <Route exact path="/" component={MainPage} />
          </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;