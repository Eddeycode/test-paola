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
    let Image = [this.state.data.results[0].picture.large];
    let Name = [this.state.data.results[0].name.first," ",this.state.data.results[0].name.last];
    let dob = [this.state.data.results[0].dob.date];
    let phone = [this.state.data.results[0].phone];
    let email = [this.state.data.results[0].email];
    let address = [this.state.data.results[0].location.street.name," ", this.state.data.results[0].location.street.number," ", this.state.data.results[0].location.city, this.state.data.results[0].location.state, this.state.data.results[0].location.country]
    let lat= [parseFloat(this.state.data.results[0].location.coordinates.latitude)];
    let lng= [parseFloat(this.state.data.results[0].location.coordinates.longitude)];
    return (
      <>
      <div>
        <img className="profil" src={Image}></img>
      </div>
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
           {Name}
          </Typography>
          <Typography color="textSecondary" className="space">
            Developer 
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            <Moment format="MMM Do, YYYY">{dob}</Moment>
          </Typography> 
          <Typography className="spc" variant="body2" component ="p">
            {phone}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            {email}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            {address}
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


  // return (
  //   <Card className="root" variant="outlined">
  //     <CardContent>
  //       <Typography variant="h5" component="h2">
  //         {persons.name};
  //       </Typography>
  //       <Typography color="textSecondary" className="space">
  //         Job
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         DoB
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Gender
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Phone
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Email
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Address
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Location
  //       </Typography>
  //     </CardContent>
  //   </Card>
