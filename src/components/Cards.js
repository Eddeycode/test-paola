import React from 'react';
import Card from '@material-ui/core/card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import axios from 'axios';
import './Cards.css';
import Maps, { MapContainer } from './Map';
import { Typography } from '@material-ui/core';
import Moment from 'react-moment';

class Cards extends React.Component {
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

    if(this.state.requestFailed) return <Card><h1 className="loading">Error...</h1></Card>
    if(!this.state.data) return <Card><h1 className="loading">Loading...</h1></Card>
    // let Image = [this.state.data.results[0].picture.large];
    // let Name = [this.state.data.results[0].name.first," ",this.state.data.results[0].name.last];
    // let dob = [this.state.data.results[0].dob.date];
    // let phone = [this.state.data.results[0].phone];
    // let email = [this.state.data.results[0].email];
    // let address = [this.state.data.results[0].location.street.name," ", this.state.data.results[0].location.street.number," ", this.state.data.results[0].location.city, this.state.data.results[0].location.state, this.state.data.results[0].location.country]
    return (
      <>
      <div>
        <img className="profil" src={this.state.data.results[0].picture.large}></img>
      </div>
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography variant="h2" component="h2">
           {this.state.data.results[0].name.first} {this.state.data.results[0].name.last}
          </Typography>
          <Typography color="textSecondary" className="space">
            Developer 
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            Date of Birth&nbsp;&nbsp;&nbsp;: <Moment format="MMM Do, YYYY">{this.state.data.results[0].dob.date}</Moment>
          </Typography> 
          <Typography className="spc" variant="body2" component ="p">
            Phone&nbsp;&nbsp;&nbsp;: {this.state.data.results[0].phone}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            Email&nbsp;&nbsp;&nbsp;: {this.state.data.results[0].email}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            Address&nbsp;&nbsp;&nbsp;: {this.state.data.results[0].location.street.name} {this.state.data.results[0].location.street.number}  {this.state.data.results[0].location.city} {this.state.data.results[0].location.state} {this.state.data.results[0].location.country}
            <div classname="spc"></div>
            <Maps/>
          </Typography>
          
        </CardContent>
      </Card>
      </>
    );
  }
}

export default Cards;