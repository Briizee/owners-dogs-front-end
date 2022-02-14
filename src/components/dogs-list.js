import React from "react"
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteDog } from '../store/actions/dogsActions'
import { store } from '../store'



function DogsList ({ dogs }) {

  const DogRow = dog => (
    <tr className="d-flex">
      <td className="col-10"><p>{dog.name}</p></td>
      <td className="col-2" style={{textAlign:"right"}}>
        <button><Link to={`/edit/${dog._id}`}>edit</Link></button>
        <button onClick={() => store.dispatch(deleteDog(dog.id))}>delete</button>
      </td>
    </tr>
  )
  return (
    <div>
      <table>
        <tbody>
          {dogs.length>0 && dogs.map((dog, i) => (DogRow(dog)))}
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(DogsList)