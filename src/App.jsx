import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

// Components
import Header from './components/jsx/components/Header';
import Reservation from './components/jsx/components/Reservation';

// Grids
import ComputerGrid from './components/jsx/grids/ComputerGrid';
import ConsoleGrid from './components/jsx/grids/ConsoleGrid';
import SoftwareGrid from './components/jsx/grids/SoftwareGrid';
import TariffGrid from './components/jsx/grids/TariffGrid';

// Items
import ComputerItem from './components/jsx/items/ComputerItem';
import ConsoleItem from './components/jsx/items/ConsoleItem';
import SoftwareItem from './components/jsx/items/SoftwareItem';
import TariffItem from './components/jsx/items/TariffItem';

function App() {
  const [tab, setTab] = useState(1);

  const LayoutIndex = () => {
    if (tab === 1) {
      return (
        <div className='tab'>
          <Header setTab={setTab} />
          <Reservation />
        </div>
      )
    } else if (tab === 2) {
      return (
        <div className='tab'>
          <Header setTab={setTab} />
          <ComputerGrid />
        </div>
      )
    } else if (tab === 3) {
      return (
        <div className='tab'>
          <Header setTab={setTab} />
          <ConsoleGrid />
        </div>
      )
    } else if (tab === 4) {
      return (
        <div className='tab'>
          <Header setTab={setTab} />
          <SoftwareGrid />
        </div>
      )
    } else if (tab === 5) {
      return (
        <div className='tab'>
          <Header setTab={setTab} />
          <TariffGrid />
        </div>
      )
    } else {
      console.log("No tab")
    }

  }

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LayoutIndex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
