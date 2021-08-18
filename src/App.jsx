import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
