import React from "react"
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteOwner } from '../store/actions/ownersActions'
import { store } from '../store'



function OwnersList ({ owners }) {

  const OwnerRow = owner => (
    <tr className="d-flex">
      <td className="col-10"><p>{owner.first_name}</p></td>
      <td className="col-2" style={{textAlign:"right"}}>
        <button><Link to={`/edit/${owner._id}`}>edit</Link></button>
        <button onClick={() => store.dispatch(deleteOwner(owner.id))}>delete</button>
      </td>
    </tr>
  )
  return (
    <div>
      <table>
        <tbody>
          {owners.length>0 && owners.map((owner, i) => (OwnerRow(owner)))}
        </tbody>
      </table>
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