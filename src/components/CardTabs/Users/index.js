import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserElement from "./UserElement";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    },
    flex: 1,
    marginBottom: "2rem"
  },
  userImg: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    marginRight: "10px"
  },

  card: {
    display: "flex",
    minWidth: "100%",
    width: "100%"
  },

  cardContent: {
    width: "100%"
  }
}));

const UserCard = props => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testId="UsersCard">
      <Card sx={{ minWidth: 275 }} className={(classes.card, classes.root)}>
        <CardContent className={classes.cardContent}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            data-testId="UsersCardTitle"
          >
            {props.title}
          </Typography>
          {props.users.map(function (user, index) {
            return (
              <UserElement user={user} index={index} useStyles={useStyles} />
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
