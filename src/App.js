import React, { lazy, Suspense } from 'react';
import { createUseStyles } from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Loading from './components/Loading'
import Footer from './components/Footer';

/* Styles */
const useStyles = createUseStyles({
  App: {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: 48
  }
})

/* Scripts */
// Lazy imports for improved render time
const Report = lazy(() => import('./views/Report'));
const Concept = lazy(() => import('./views/Concept'));
const Sources = lazy(() => import('./views/Sources'));

/* Structure */
const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.App}>
      <Navigation />
      <Switch>
        <Suspense fallback={Loading()}>
          <Route exact path="/" component={Report} />
          <Route path="/concept" component={Concept} />
          <Route path="/sources" component={Sources} />
          <Footer />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;

/*
- Contents Textgröße
*/