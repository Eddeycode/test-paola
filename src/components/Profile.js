import React from 'react';
import axios from 'axios';
import './Profile.css';

class Profile extends React.Component {
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

    if(this.state.requestFailed) return <p>Request failed.</p>
    if(!this.state.data) return <p>Loading</p>

    return (    
        <img className="profil" src={this.state.data.results[0].picture.large}></img>
    );
  }
}
export default Profile;
