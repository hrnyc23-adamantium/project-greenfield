import React, { useEffect } from 'react';
import RelatedItem from './RelatedItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));


const Related = (props) => {
  const classes = useStyles();

  useEffect(() => {
    if (props.related.length === 0) {
      props.fetchRelatedIds(props.info.id);
    } else if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });

  return (
    <div>
    <Grid container className={classes.root}
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={4}
    >
      {props.related.length !== 0 ? props.related.map((item, idx) => {
        return (
          <Grid item key={idx}>
            <RelatedItem item={item} currentItemInfo={props.info} handleRelatedClick={props.handleRelatedClick}/>
          </Grid>
        )
      }) : null}      
    </Grid>
    </div>
  )
};

export default Related;