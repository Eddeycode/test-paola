import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Cards.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Cards() {

  return (
    <Card className="root" variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Nama
        </Typography>
        <Typography color="textSecondary" className="space">
          Job
        </Typography>
        <Typography variant="body2" component="p">
          DoB
        </Typography>
        <Typography variant="body2" component="p">
          Gender
        </Typography>
        <Typography variant="body2" component="p">
          Phone
        </Typography>
        <Typography variant="body2" component="p">
          Email
        </Typography>
        <Typography variant="body2" component="p">
          Address
        </Typography>
        <Typography variant="body2" component="p">
          Location
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Cards;