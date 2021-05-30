import logo from './logo.svg';
import './App.css';
import { Home } from './Home'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
        <element />
        <BrowserRouter>
            <Switch>
                <Route exact path='/Home' component={Home} />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
