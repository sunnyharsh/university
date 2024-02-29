import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "20px auto",
    minHeight: "300px",
    height: "100%",
  },
  title: {
    fontSize: "1rem !important",
    fontWeight: "bold !important",
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  chatButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cardContentRoot: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: "0px 10px !important",
  },
}));

const MyCard = ({ obj }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContentRoot}>
        <Grid>
          <Typography variant="h2" component="h2" className={classes.title}>
            {obj.title}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="body1"
            component="p"
            className={classes.description}
          >
            {obj.description}
          </Typography>
        </Grid>
        <Grid>
          <Typography> Chat Now</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MyCard;
