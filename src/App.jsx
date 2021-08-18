import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <Header />
      <div className='flex-grow-1'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
