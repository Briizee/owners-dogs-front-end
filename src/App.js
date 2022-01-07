import { useEffect, useState } from "react"
import axios from "axios"
import {Switch, Route, Link} from "react-router-dom"
import { BrowserRouter as Router, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from "./components/navbar"
import AddDog from "./components/add-dog"
import AddOwner from "./components/add-owner"
import Dog from "./components/dog"
import Owner from "./components/owner"
import DogsList from "./components/dogs-list"
import OwnersList from "./components/owners-list"

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3000/dog')
      .then(res => setDogs(res.data))
    console.log(dogs, 'DOGS')
  }, [])

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
      <Route path="/owners" component={OwnersList} />
      <Route path="/dogs" component={DogsList} />
      </Routes>
      </Router>
      <div className="img-container">
      {dogs && dogs.map(dog => (<div className="dog-photo" role="img" style={{ backgroundImage: `url(${dog.photo_url})`}} alt="photo of a dog"> </div>))}
      </div>
    </div>
  );
}

export default App;
