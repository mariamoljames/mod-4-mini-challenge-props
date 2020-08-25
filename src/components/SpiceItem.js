import React from 'react'

class SpiceItem extends React.Component {

  render() {
    return (
      <div className="spice-item">
        <img src={this.props.image} alt={this.props.title} />
        <div className="details">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <em>{this.props.notes}</em>
        </div>
      </div>
    )
  }
}

export default SpiceItem