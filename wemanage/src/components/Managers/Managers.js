import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Manager from "./Manager/Manager";
import useStyles from "./styles";

const Managers = ({ setCurrentId }) => {
  const managers = useSelector((state) => state.managers);
  const classes = useStyles();

  return (!managers.length ? 
    <CircularProgress />
   : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {managers.map((manager) => (
        <Grid key={manager._id} item xs={12} sm={6} md={6}>
          <Manager manager={manager} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  )
  );
};

export default Managers;
