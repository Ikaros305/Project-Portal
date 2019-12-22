import React, { Component } from "react";
// import ProjectList from "../projects/ProjectList.jsx";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import InputAdornment from "@material-ui/core/InputAdornment";
import Parallax from "components/Parallax/Parallax.jsx";
// import Search from "@material-ui/icons/Search";
// import PieChart from "@material-ui/icons/PieChart";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "components/Footer/Footer.jsx";
// import Filter from "./Filter.jsx";
import _ from "lodash";
// import Domian from "./Domian.jsx";
import {
  // Pie,
  Bar
} from "react-chartjs-2";

class Charts extends Component {
  // componentDidMount = (this.props) => {
  //   console.log(projects);
  // };

  render() {
    const {
      projects,
      auth,
      // notifications,
      // profile,
      classes
      // filter
    } = this.props;
    // console.log(projects);

    // var i;
    const batchs = _.uniq(
      projects &&
        projects
          .filter(project => {
            return project.year;
          })
          .map(project => {
            return project.year;
          })
    );
    const domains = _.uniq(
      projects &&
        projects
          .filter(project => {
            return project.domain;
          })
          .map(project => {
            return project.domain;
          })
    );

    const batch1 =
      projects &&
      projects
        .filter(project => {
          return "2015-16".includes(project.year);
        })
        .map(project => {
          return project.year;
        }).length;

    const batch2 =
      projects &&
      projects
        .filter(project => {
          return "2016-17".includes(project.year);
        })
        .map(project => {
          return project.year;
        }).length;

    const batch3 =
      projects &&
      projects
        .filter(project => {
          return "2017-18".includes(project.year);
        })
        .map(project => {
          return project.year;
        }).length;

    const batch4 =
      projects &&
      projects
        .filter(project => {
          return "2018-19".includes(project.year);
        })
        .map(project => {
          return project.year;
        }).length;
    const batch5 =
      projects &&
      projects
        .filter(project => {
          return "2019-20".includes(project.year);
        })
        .map(project => {
          return project.year;
        }).length;
    // const batch6 =
    //   projects &&
    //   projects
    //     .filter(project => {
    //       return project.year[0].includes(project.year);
    //     })
    //     .map(project => {
    //       return project.year;
    //     }).length;
    const domain1 =
      projects &&
      projects
        .filter(project => {
          return "Adversarial Network".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain2 =
      projects &&
      projects
        .filter(project => {
          return "Agriculture".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain3 =
      projects &&
      projects
        .filter(project => {
          return "Artificial Intelligence".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain4 =
      projects &&
      projects
        .filter(project => {
          return "Augmented Reality".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain5 =
      projects &&
      projects
        .filter(project => {
          return "Blockchain".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain6 =
      projects &&
      projects
        .filter(project => {
          return "Cloud Computing".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain7 =
      projects &&
      projects
        .filter(project => {
          return "Cloud Computing".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain8 =
      projects &&
      projects
        .filter(project => {
          return "Cryptography".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain9 =
      projects &&
      projects
        .filter(project => {
          return "Cyber Security".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain10 =
      projects &&
      projects
        .filter(project => {
          return "Data Mining".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain11 =
      projects &&
      projects
        .filter(project => {
          return "Deep Learning".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain12 =
      projects &&
      projects
        .filter(project => {
          return "Hardware".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain13 =
      projects &&
      projects
        .filter(project => {
          return "IOT".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain14 =
      projects &&
      projects
        .filter(project => {
          return "Image Processing".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain15 =
      projects &&
      projects
        .filter(project => {
          return "Machine Learning".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain16 =
      projects &&
      projects
        .filter(project => {
          return "Mobile Computing".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain17 =
      projects &&
      projects
        .filter(project => {
          return "Network Security".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain18 =
      projects &&
      projects
        .filter(project => {
          return "Networking".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain19 =
      projects &&
      projects
        .filter(project => {
          return "OutHouse".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain20 =
      projects &&
      projects
        .filter(project => {
          return "Project Management".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain21 =
      projects &&
      projects
        .filter(project => {
          return "Robotics".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain22 =
      projects &&
      projects
        .filter(project => {
          return "Smart City".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain23 =
      projects &&
      projects
        .filter(project => {
          return "Software Engineering".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain24 =
      projects &&
      projects
        .filter(project => {
          return "Web Development".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    const domain25 =
      projects &&
      projects
        .filter(project => {
          return "Web Mining".includes(project.domain);
        })
        .map(project => {
          return project.domain;
        }).length;
    // const domain25 =
    //   projects &&
    //   projects
    //     .filter(project => {
    //       return "".includes(project.year);
    //     })
    //     .map(project => {
    //       return project.year;
    //     }).length;
    // const domain26 =
    //   projects &&
    //   projects
    //     .filter(project => {
    //       return "".includes(project.year);
    //     })
    //     .map(project => {
    //       return project.year;
    //     }).length;
    // const data = {
    //   labels: ["2015-16", "2016-17", "2017-18", "2018-19", "2019-20"],
    //   datasets: [
    //     {
    //       data: [batch1, batch2, batch3, batch4, batch5],
    //       backgroundColor: [
    //         "#FF6384",
    //         "#5DB9F6",
    //         "#FFCE56",
    //         "#76DC5D",
    //         "#D869D3"
    //       ],
    //       hoverBackgroundColor: [
    //         "#FF2D59",
    //         "#0098FF",
    //         "#FFB80B",
    //         "#46D721",
    //         "#EA00E0"
    //       ]
    //     }
    //   ]
    // };
    const data1 = {
      labels: [...batchs],
      datasets: [
        {
          label: ["year"],
          data: [batch1, batch2, batch3, batch4, batch5],
          backgroundColor: [
            // "#FF6384",
            "#FF6384",
            "#FF6384",
            "#FF6384",
            "#FF6384",
            "#FF6384"
            // "#FFCE56",
            // "#76DC5D",
            // "#D869D3"
          ],
          borderColor: [
            // "#FF2D59",
            "#FF2D59",
            "#FF2D59",
            "#FF2D59",
            "#FF2D59",
            "#FF2D59"
            //  "#FFB80B", "#46D721", "#EA00E0"
          ],
          borderWidth: 1.5,
          hoverBackgroundColor: [
            // "#FF2D59",
            "#FF2D59",
            "#FF2D59",
            "#FF2D59",
            "#FF2D59",
            "#FF2D59"
            // "#FFB80B",
            // "#46D721",
            // "#EA00E0"
          ]
        }
      ]
    };
    // const data1 = {
    //   labels: [...batchs],
    //   datasets: [
    //     {
    //       data: [batch1, batch2, batch3, batch4, batch5],
    //       backgroundColor: [
    //         "#FF6384",
    //         "#5DB9F6",
    //         "#FFCE56",
    //         "#76DC5D",
    //         "#D869D3"
    //       ],
    //       borderColor: ["#FF2D59", "#0098FF", "#FFB80B", "#46D721", "#EA00E0"],
    //       borderWidth: 1.5,
    //       hoverBackgroundColor: [
    //         "#FF2D59",
    //         "#0098FF",
    //         "#FFB80B",
    //         "#46D721",
    //         "#EA00E0"
    //       ]
    //     }
    //   ]
    // };

    // labels: [
    //   "Adversarial Network",
    //   "Agriculture",
    //   "Artificial Intelligence",
    //   "Augmented Reality",
    //   "Blockchain",
    //   "Cloud Computing",
    //   "College Automation",
    //   "Cryptography",
    //   "Cyber Security",
    //   "Data Mining",
    //   "Deep Learning",
    //   "Hardware",
    //   "IOT",
    //   "Image Processing",
    //   "Machine Learning",
    //   "Mobile Computing ",
    //   "Network Security",
    //   "Networking",
    //   "OutHouse",
    //   "Project Management",
    //   "Robotics",
    //   "Smart City",
    //   "Software Engineering",
    //   "Web Development",
    //   "Web Mining"
    // ],
    const data2 = {
      labels: [...domains],
      datasets: [
        {
          label: ["domain"],

          data: [
            domain1,
            domain2,
            domain3,
            domain4,
            domain5,
            domain6,
            domain7,
            domain8,
            domain9,
            domain10,
            domain11,
            domain12,
            domain13,
            domain14,
            domain15,
            domain16,
            domain17,
            domain18,
            domain19,
            domain20,
            domain21,
            domain22,
            domain23,
            domain24,
            domain25
          ],
          backgroundColor: [
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6",
            "#5DB9F6"
            // "#5DB9F6",
            // "#FFCE56",
            // "#76DC5D",
            // "#D869D3",
          ],
          borderColor: [
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF"
            //  "#0098FF", "#FFB80B", "#46D721", "#EA00E0"
          ],
          borderWidth: 1.5,
          hoverBackgroundColor: [
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF",
            "#0098FF"
            // "#0098FF",
            // "#FFB80B",
            // "#46D721",
            // "#EA00E0"
          ]
        }
      ]
    };
    // const data2 = {
    //   labels: [...domain],
    //   datasets: [
    //     {
    //       data: [batch1, batch2, batch3, batch4, batch5],
    //       backgroundColor: [
    //         "#FF6384",
    //         "#5DB9F6",
    //         "#FFCE56",
    //         "#76DC5D",
    //         "#D869D3"
    //       ],
    //       borderColor: ["#FF2D59", "#0098FF", "#FFB80B", "#46D721", "#EA00E0"],
    //       borderWidth: 1.5,
    //       hoverBackgroundColor: [
    //         "#FF2D59",
    //         "#0098FF",
    //         "#FFB80B",
    //         "#46D721",
    //         "#EA00E0"
    //       ]
    //     }
    //   ]
    // };

    // const legend = { display: false };

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

    // for (i = 0; i < batchs.length; i++) {

    //   console.log(batchs[i]);
    // }
    // console.log(yo);
    // var yo = batchs.forEach(function(batch, i) {
    //   // console.lo(i);
    //   console.log(batch);
    // });
    // const batch7 =
    //   projects &&
    //   projects.map(project => {
    //     return project.year;
    //   });

    console.log(domains);

    if (!auth.uid) return <Redirect to="/home" />;

    return (
      <div>
        <Parallax tiny />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              {/* <div className="row">
                {" "}
             <h2 align="center">Projects (Batch)</h2>
              </div> */}
              <div className="col s12 m4 18">
                <h2 align="center">No. of Projects (Batch-Wise)</h2>
                <br />
                <Bar
                  data={data1}
                  width={10}
                  height={5}
                  // legend={legend}
                  options={{
                    scales: {
                      xAxes: [
                        {
                          barPercentage: 50,
                          barThickness: 50
                          // maxBarThickness: 10,
                          // minBarLength: 2,
                          // gridLines: {
                          //   offsetGridLines: true
                          // }
                        }
                      ]
                    }
                  }}
                />{" "}
                <br /> <br />
                <br /> <br />
                <br /> <br />
                <h2 align="center">No. of Projects (Domain-Wise)</h2>
                <br />
                <Bar
                  data={data2}
                  width={10}
                  height={5}
                  // legend={legend}
                  options={{
                    scales: {
                      xAxes: [
                        {
                          barPercentage: 20,
                          barThickness: 20
                          // maxBarThickness: 10,
                          // minBarLength: 2,
                          // gridLines: {
                          //   offsetGridLines: true
                          // }
                        }
                      ]
                    }
                  }}
                />
                <br /> <br />
                {/* <Pie data={data} /> */}
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  withStyles(profilePageStyle),
  firestoreConnect([
    { collection: "projects", orderBy: ["year", "asc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Charts);
