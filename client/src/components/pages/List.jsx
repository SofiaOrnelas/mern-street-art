import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import api from '../../api'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streetArts: null,
  }
}
  render() {
   return (
    <div className="List">
    <h1>List of Street Arts</h1>
    {!this.state.streetArts}
    {this.state.streetArts && <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Google Maps Direction</th>
        <th>Detail</th>
      </tr>
    </thead>
    <tbody>
    {this.state.streetArts.map(streetArt => <tr key={streetArt._id}>
      <td><img src={streetArt.pictureUrl}/></td>
      <td><Link to={streetArt.location.coordinates}/></td>
      <td><button>Detail</button></td>
    </tr>
      )}
    </tbody>
  </table>}
</div>
);
} 

  componentDidMount() {
    api.getStreetArts()
      .then(streetArts => {
        this.setState({
          streetArts: streetArts
        })
      })
  }
}

