import React from "react"
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteOwner } from '../store/actions/ownersActions'
import { store } from '../store'



function OwnersList ({ owners }) {

  const OwnerRow = owner => (
    <tr className="table-dark">
      <td className="col-10"><p>{owner.first_name}</p></td>
      <td className="col-1" >
        <button className="btn btn-primary "><Link to={`/edit/${owner._id}`} style={{ textDecoration: 'none', color: 'white'}}>edit</Link></button>
      </td>
      <td className="col-1" >
        <button className="btn btn-primary " onClick={() => store.dispatch(deleteOwner(owner.id))}>delete</button>
      </td>
    </tr>
  )
  return (
    <div className="bg-dark">
      <h2 style={{ color: 'white'}}> Owners </h2>
      <div className="table-responsive">
        <table className="table table-hover  ">
          <thead style={{ backgroundColor: '#404040', color: 'white'}}>
            <tr>
              <th className="col-10">Name</th>
              <th className="col-1"></th>
              <th className="col-1"></th>
            </tr>
          </thead>
        <tbody>
          {owners.length>0 && owners.map((owner, i) => (OwnerRow(owner)))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    owners: state.owners
  }
}

export default connect(mapStateToProps)(OwnersList)