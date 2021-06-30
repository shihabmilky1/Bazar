import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Help from './components/Help/Help';
export const ApplicationProvider = createContext()
function App() {
  const [cart, setCart] = useState([])
  return (
    <ApplicationProvider.Provider value={[cart, setCart]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/help'>
            <Help />
          </Route>
        </Switch>
      </Router>
    </ApplicationProvider.Provider>
  );
}

export default App;
