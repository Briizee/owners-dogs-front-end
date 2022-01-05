import { useEffect, useState } from "react"
import axios from "axios"
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
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
  })

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Hana
        </a>
      </nav>
      {dogs && dogs.map(dog => (<img src={dog.photo_url}/>))}
    </div>
  );
}

export default App;
