import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Loading from './components/Loading'
import Footer from './components/Footer';
const Report = lazy(() => import('./views/Report'));
const Concept = lazy(() => import('./views/Concept'));
const Sources = lazy(() => import('./views/Sources'));

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Suspense fallback={Loading()}>
          <Route exact path="/" component={Report} />
          <Route path="/concept" component={Concept} />
          <Route path="/sources" component={Sources} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;