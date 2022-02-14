import React from "react"
import { connect } from 'react-redux'

function Homepage ({dogs}) {
  return (
      <div>
          <div className="img-container">
            {dogs && dogs.map((dog, i) => (<div key={i} className="dog-photo" role="img" style={{ backgroundImage: `url(${dog.photo_url})`}} alt="photo of a dog"> </div>))}
          </div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps)(Homepage)