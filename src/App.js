import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PicxyPage from './pages/PicxyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/picxy" component={PicxyPage} />
          </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;