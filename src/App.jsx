import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

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
import SignIn from './components/jsx/components/SignIn';
import SignUp from './components/jsx/components/SignUp';

function App() {

  const [tab, setTab] = useState(2);
  const [clientID, setClientID] = useState(null);


  const LayoutIndex = () => {
    if (tab === 2) {
      return (
        <div className='tab'>
          <Header setTab={setTab} clientID={clientID} />
          <ComputerGrid />
        </div>
      )
    } else if (tab === 3) {
      return (
        <div className='tab'>
          <Header setTab={setTab} clientID={clientID} />
          <ConsoleGrid />
        </div>
      )
    } else if (tab === 4) {
      return (
        <div className='tab'>
          <Header setTab={setTab} clientID={clientID} />
          <SoftwareGrid />
        </div>
      )
    } else if (tab === 5) {
      return (
        <div className='tab'>
          <Header setTab={setTab} clientID={clientID} />
          <TariffGrid />
        </div>
      )
    } else {
      console.log("No tab")
    }

  }

  const LayoutReservation = () => {
    return (
      <div className='reservation'>
        <Reservation clientID={clientID} />
      </div>
    )
  }

  const LayoutSignIn = () => {
    return (
      <div className='sign-in'>
        <SignIn setClientID={setClientID} />
      </div>
    )
  }

  const LayoutSignUp = () => {
    return (
      <div className='sign-up'>
        <SignUp />
      </div>
    )
  }

  useEffect(() => {
    setClientID(localStorage.getItem("clientID"));
    console.log(localStorage.getItem("clientID"));
  }, [tab, localStorage.getItem("clientID")])

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LayoutIndex />} />
          <Route path='/reservation' element={<LayoutReservation />} />
          <Route path='/sign-in' element={<LayoutSignIn />} />
          <Route path='/sign-up' element={<LayoutSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
