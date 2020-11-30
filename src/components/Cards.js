import React from 'react';
import Card from '@material-ui/core/card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import axios from 'axios';
import './Cards.css';
import { Typography } from '@material-ui/core';

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

    if(this.state.requestFailed) return <p>Request failed.</p>
    if(!this.state.data) return <p>Loading</p>

    return (
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.state.data.results[0].name.first} {this.state.data.results[0].name.last}
          </Typography>
          <Typography color="textSecondary" className="space">
            Developer
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            {this.state.data.results[0].dob.date}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            {this.state.data.results[0].phone}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            {this.state.data.results[0].email}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            {this.state.data.results[0].location.street.name} {this.state.data.results[0].location.street.number}, {this.state.data.results[0].location.city}, {this.state.data.results[0].location.state}, {this.state.data.results[0].location.country}
          </Typography>
          <Typography className="spc" variant="body2" component ="p">
            GPS
          </Typography>
        </CardContent>
      </Card>

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
