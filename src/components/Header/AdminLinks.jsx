import React from "react";

import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { compose } from "redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import PieChart from "@material-ui/icons/PieChart";

// @material-ui/icons
import {
  // CloudDownload,
  PersonAdd,
  // OpenInBrowser,
  BarChart,
  NoteAdd,
  ExitToApp
} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function AdminLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <Button color="transparent" className={classes.navLink}> */}

        <Link to="/create" className={classes.navLink}>
          <NoteAdd className={classes.icons} /> Add Project
        </Link>
        {/* </Button> */}
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button href="/interns" color="transparent" className={classes.navLink}>
          <PersonAdd className={classes.icons} /> Interns
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {/* <Button href="/admins" color="transparent" className={classes.navLink}> */}
        <Link to="/admins" className={classes.navLink}>
          <PersonAdd className={classes.icons} />
          Add Admin
        </Link>
        {/* </Button> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Button href="/admins" color="transparent" className={classes.navLink}> */}
        <Link to="/charts" className={classes.navLink}>
          <BarChart className={classes.icons} />
          Charts
        </Link>
        {/* </Button> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={props.signOut}
        >
          <ExitToApp className={classes.icons} /> Log Out
        </Button>
      </ListItem>
    </List>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(headerLinksStyle)
)(AdminLinks);
