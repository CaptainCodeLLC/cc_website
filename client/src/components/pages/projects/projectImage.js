import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Badge} from 'reactstrap'

const styles = {
  card: {
    maxWidth: 360,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <a href={props.siteLink}>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
          title="Contemplative Reptile"
        />
      </a>
        <CardContent>
          <Typography style ={{marginBottom:-10}} variant="headline" component="h1">
            <a href={props.siteLink}>
             {props.projectTitle}
            </a>
          </Typography>
          
        </CardContent>
        <CardActions style = {{marginLeft:'10%'}}>
          <Button size="small" color="primary">
            Redesign
          </Button>
          <Button size="small" color="primary">
            <Badge href={props.githubSrc} color="dimgrey">Github Repo</Badge>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
