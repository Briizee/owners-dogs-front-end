import React from "react"
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteDog } from '../store/actions/dogsActions'
import { store } from '../store'



function DogsList ({ dogs }) {

  const DogRow = dog => (
    <tr className="table-dark">
      <td className="col-4"><p>{dog.name}</p></td>
      <td className="col-4"><p>{dog.breed}</p></td>
      <td className="col-2"><p>{dog.age}</p></td>
      <td className="col-1" >
        <button className="btn btn-primary "><Link to={`/edit/${dog._id}`} style={{ textDecoration: 'none', color: 'white'}}>edit</Link></button>
      </td>
      <td className="col-1" >
        <button className="btn btn-primary" onClick={() => store.dispatch(deleteDog(dog.id))}>delete</button>
      </td>
    </tr>
  )
  return (
    <div className="bg-dark">
      <h2 style={{ color: 'white'}}> Dogs </h2>
      <div className="table-responsive">
        <table className="table table-hover  ">
          <thead style={{ backgroundColor: '#404040', color: 'white'}}>
            <tr>
              <th className="col-4">Name</th>
              <th className="col-4">Breed</th>
              <th className="col-2">Age</th>
              <th className="col-1"></th>
              <th className="col-1"></th>
            </tr>
          </thead>
          <tbody >
            {dogs.length>0 && dogs.map((dog, i) => (DogRow(dog)))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(DogsList)