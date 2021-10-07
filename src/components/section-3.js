import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

function CardGrid() {
  const classes = useStyles();
  const data = {
    name: [
      { data:"somedata", num: 13000 },
      {data:"somedata", num: 16500 },
      { data:"somedata", num: 14250 },
      { data:"somedata", num: 19000 }
    ],
    id: [1, 2, 3, 4]
  };
  return (
    <div className={classes.root}>
      {data.id.map((elem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.name.map((elem) => (
            <Grid item xs={3} key={data.name.indexOf(elem)}>
              <Card>
                <CardHeader
                  title={`quarter : ${elem.data}`}
                  subheader={`earnings : ${elem.num}`}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                  content
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
}
export default CardGrid;