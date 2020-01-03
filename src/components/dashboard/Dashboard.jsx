import React, { Component } from "react";
import ProjectList from "../projects/ProjectList.jsx";
// import Notifications from "./Notifications.jsx";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import InputAdornment from "@material-ui/core/InputAdornment";
import Parallax from "components/Parallax/Parallax.jsx";
// import Search from "@material-ui/icons/Search";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "components/Footer/Footer.jsx";
import Filter from "./Filter.jsx";
import _ from "lodash";
// import Domian from "./Domian.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";

class Dashboard extends Component {
  state = {
    filter: "",
    search: "",
    domain: "",
    year: "",
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      filter: _.uniq([...this.state.filter, e.target.value]),
    });
  };
  handleCheck = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      domain: _.uniq([...this.state.domain, e.target.value]),
    });
  };
  handleYear = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      year: _.uniq([...this.state.year, e.target.value]),
    });
  };
  handleSearch = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      search: _.uniq([...this.state.filter, e.target.value]),
    });
    // console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();

    // this.props.project.jobs.filter(job => job.includes(this.state.filter));
    // console.log(this.props);

    // this.props.history.push("/");
  };
  handleClear = e => {
    e.preventDefault();
    this.state.filter || this.state.domain || this.state.year
      ? this.setState({
          // selectedEnabled: e.target.value,
          ...this.state,
          checked: false,
          filter: "",
          domain: "",
          year: "",
        })
      : this.setState({
          // selectedEnabled: e.target.value,
          ...this.state,
        });

    // this.props.history.push("/");
  };

  render() {
    const {
      projects,
      auth,
      // notifications,
      // profile,
      classes,
      // filter
    } = this.props;
    // const links =
    //   profile.category === "admin" ? (
    //     // <div className="col s6 m4 12">
    //     <div>
    //       <Filter />
    //       {/* <Notifications notifications={notifications} /> */}
    //     </div>
    //   ) : (
    //     <div />
    //   );

    if (!auth.uid) return <Redirect to="/home" />;
    if (projects) {
      return (
        <div>
          <Parallax tiny />

          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                {/* <div>
                {" "}
                <CustomInput
                  labelText="Search"
                  id="search"
                  formControlProps={{
                    fullWidth: true
                  }}
                  // floatingLabelFixed="true"
                  inputProps={{
                    type: "text",

                    endAdornment: (
                      <InputAdornment position="end">
                        <Search
                          className={classes.inputIconsColor}
                          onClick={this.handleSubmit}
                        />
                      </InputAdornment>
                    )
                  }}
                  onChange={this.handleSearch}
                  required="true"
                />{" "}
             
              </div> 
              */}
                <div className="row">
                  <Filter
                    projects={projects}
                    props={this.props}
                    handleChange={this.handleChange}
                    handleClear={this.handleClear}
                    handleSubmit={this.handleSubmit}
                    checked={this.state.checked}
                    filter={this.state.filter}
                    handleCheck={this.handleCheck}
                    handleYear={this.handleYear}
                    dom={this.state.domain}
                    batch={this.state.year}
                    search={this.state.search}
                  />
                  {/* <Domian
                  projects={projects}
                  props={this.props}
                  handleCheck={this.handleCheck}
                  handleClear={this.handleClear}
                  handleSubmit={this.handleSubmit}
                  checked={this.state.checked}
                  dom={this.state.domain}
                  search={this.state.search}
                /> */}
                  {/* {links} */}
                  <div className="col s12 m4 18">
                    <ProjectList
                      projects={projects}
                      props={this.props}
                      filter={this.state.filter}
                      domain={this.state.domain}
                      year={this.state.year}
                    />
                    <h4>{this.props.filter}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Parallax tiny />

          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <div align="center">
                  <CircularProgress
                    className={classes.progress}
                    color="secondary"
                  />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  withStyles(profilePageStyle),
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["year", "desc"],
    },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]),
)(Dashboard);
