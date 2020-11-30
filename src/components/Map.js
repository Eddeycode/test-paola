import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const style = {
  maxWidth: "250px",
  height: "250px",
  overflowX: "hidden",
  overflowY: "hidden"
};
const containerStyle = {
  maxWidth: "450px",
  height: "350px"
};

class MapContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/').then((response) => {
    return response.json()}).then((d) =>  {
      console.log('parsed json', d)
      this.setState({data: d});
    }).catch(function(ex) {
      console.log('parsing failed', ex)
      this.setState({
          requestFailed: true
      })
    })
  }

    render() {
      if(this.state.requestFailed) return <p>Error location not found.</p>
    if(!this.state.data) return <p>Loading Map...</p>
    return (
       <Map
         google={this.props.google}
        zoom={4}
        style={style}
        containerStyle = {containerStyle}
        initialCenter={{ lat: parseFloat(this.state.data.results[0].location.coordinates.latitude), lng: parseFloat(this.state.data.results[0].location.coordinates.longitude)}}>
        <Marker position={{ lat: parseFloat(this.state.data.results[0].location.coordinates.latitude), lng: parseFloat(this.state.data.results[0].location.coordinates.longitude)}} />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAdfd1RbhG2YyIyBytYVkl4fK3ENrc5yz4'
})(MapContainer);