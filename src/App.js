import { Route, Switch } from 'react-router-dom'
import Report from './views/Report'
import Concept from './views/Concept';
import Sources from './views/Sources';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Report} />
        <Route path="/concept" component={Concept} />
        <Route path="/sources" component={Sources} />
      </Switch>
    </div>
  );
}

export default App;
