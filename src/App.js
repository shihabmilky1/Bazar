import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';

export const ApplicationProvider = createContext()
function App() {
  const [cart, setCart] = useState([])
  return (
    <ApplicationProvider.Provider value={[cart, setCart]}>
      <Home />
    </ApplicationProvider.Provider>
  );
}

export default App;
