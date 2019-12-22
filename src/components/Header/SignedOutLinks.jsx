import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
  PersonAdd,
  //  OpenInBrowser,
  Input
} from "@material-ui/icons";

// core components

// import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
const SignedOutLinks = ({ ...props }) => {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/signin" className={classes.navLink}>
          <Input className={classes.icons} /> SignIn
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          <OpenInBrowser className={classes.icons} /> LogIn
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link to="/signup" className={classes.navLink}>
          <PersonAdd className={classes.icons} /> SignUp
        </Link>
      </ListItem>
    </List>
  );
};

export default withStyles(headerLinksStyle)(SignedOutLinks);
