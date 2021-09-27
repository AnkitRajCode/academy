import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

class MapContainer extends Component {

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={17}
          style={{height:"290px",width:"290px"}}
          initialCenter={{ lat: 20.353635, lng: 85.834609}}
        >
        <Marker position={{ lat: 20.353635, lng:  85.834609}} />
        </Map>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey
  }
))(MapContainer)
