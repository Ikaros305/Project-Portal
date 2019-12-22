import React, { Component } from "react";

// import moment from "moment";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "components/CustomButtons/Button.jsx";
// import Radio from "@material-ui/core/Radio";
// import Switch from "@material-ui/core/Switch";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Check from "@material-ui/icons/Check";
// import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import _ from "lodash";
import CardBody from "components/Card/CardBody.jsx";

class Domain extends Component {
  // state = {
  //   checked: false,
  //   filter: ""
  // };
  // handleChange = e => {
  //   this.setState({
  //     ...this.state,
  //     filter: _.uniq([...this.state.filter, e.target.value]),
  //     checked: !this.state.checked
  //   });
  // };
  // handleCheck = e => {
  //   this.setState({
  //     // selectedEnabled: e.target.value,
  //     [e.target.id]: [...this.state.filter, e.target.value]
  //   });
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   // console.log(this.props);

  //   // this.props.history.push("/");
  // };
  // handleClear = e => {
  //   e.preventDefault();
  //   this.state.filter
  //     ? this.setState({
  //         // selectedEnabled: e.target.value,
  //         ...this.state,
  //         checked: false,
  //         filter: ""
  //       })
  //     : this.setState({
  //         // selectedEnabled: e.target.value,
  //         ...this.state
  //       });

  //   // this.props.history.push("/");
  // };

  render() {
    const {
      classes,
      projects,
      handleClear,
      // handleSubmit,
      handleCheck,
      dom
      // checked
    } = this.props;
    const domains = _.uniq(
      projects &&
        projects.map(project => {
          return project.domain;
        })
    );
    // const filters = this.state.filter;
    // const abc =
    //   filters &&
    //   filters.map(filter => {
    //     return filter;
    //   });
    // console.log(abc);
    return (
      <div className="section">
        <Card>
          <CardHeader color="success">Filter</CardHeader>
          <CardBody>
            <div className={classes.title}>
              <h4>Domains</h4>
            </div>
            <div id="checkRadios">
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    {domains &&
                      domains.map(domain => {
                        return (
                          <div key={_.uniqueId()}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={dom.includes(domain)}
                                  onClick={handleCheck}
                                  value={domain}
                                  id={`dom${domain}`}
                                  aria-label="A"
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{ checked: classes.checked }}
                                />
                              }
                              classes={{
                                label: classes.label
                              }}
                              label={domain}
                            />
                          </div>
                        );
                      })}
                  </div>
                </GridItem>{" "}
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    {/* <Button color="danger" onClick={handleSubmit}>
                      Save
                    </Button> */}

                    <Button color="danger" onClick={handleClear}>
                      Clear
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(Domain);
