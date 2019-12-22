import React from "react";
import moment from "moment";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CardActionArea from "@material-ui/core/CardActionArea";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
const ProjectSummary = ({ project, classes, props }) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => props.history.push("/project/" + project.id)}
      >
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{project.project_title}</h4>
        </CardHeader>

        <CardBody>
          <h5 className={classes.cardTitle}>{project.domain}</h5>

          <h6 className={classes.cardTitle}>{project.year}</h6>

          <p className={classes.cardCategory}> {project.guide_name}</p>
        </CardBody>

        <CardFooter chart>
          <div className={classes.stats}>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </CardFooter>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(dashboardStyle)(ProjectSummary);
