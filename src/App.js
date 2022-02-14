import { useEffect } from "react"
import { Route } from "react-router-dom"
import { BrowserRouter as Router, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from "./components/navbar"
import Homepage from "./components/homepage"
import { getDogs } from "./store/actions/dogsActions"
import { connect } from 'react-redux'
import { store } from './store'

import DogsList from "./components/dogs-list"
import OwnersList from "./components/owners-list"

function App() {
  
  useEffect(() => {
    store.dispatch(getDogs())
  }, [])

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/owners" element={<OwnersList />} />
          <Route path="/dogs" element={<DogsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App