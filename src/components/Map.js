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

class MapContainer extends Component {
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
        return (
            <Map
              google={this.props.google}
              zoom={4}
              style={style}
              containerStyle = {containerStyle}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
              <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
    }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAdfd1RbhG2YyIyBytYVkl4fK3ENrc5yz4'
})(MapContainer);