import React from "react";
import ProjectSummary from "./ProjectSummary.jsx";

const ProjectList = ({ projects, props, filter, search, domain, year }) => {
  // const value =
  //   projects &&
  //   projects.map(project => {
  //     return;
  //   });
  return (
    <div className="project-list section">
      {filter && domain && year
        ? projects &&
          projects
            // .filter(project => {
            //   return filter.includes(project.domain);
            // })
            // .filter(project => {
            // ;
            // })
            .filter(project => {
              return domain.includes(project.domain);
            })
            .filter(project => {
              return filter.includes(project.guide_name);
            })
            .filter(project => {
              return year.includes(project.year);
            })

            .map(project => {
              return (
                <div key={project.id}>
                  <ProjectSummary project={project} props={props} />
                </div>
              );
            })
        : filter && domain
        ? projects &&
          projects
            // .filter(project => {
            //   return filter.includes(project.domain);
            // })
            // .filter(project => {
            // ;
            // })
            .filter(project => {
              return domain.includes(project.domain);
            })
            .filter(project => {
              return filter.includes(project.guide_name);
            })
            // .filter(project => {
            //   return year.includes(project.year);
            // })

            .map(project => {
              return (
                <div key={project.id}>
                  <ProjectSummary project={project} props={props} />
                </div>
              );
            })
        : filter && year
        ? projects &&
          projects
            // .filter(project => {
            //   return filter.includes(project.domain);
            // })
            // .filter(project => {
            // ;
            // })
            // .filter(project => {
            //   return domain.includes(project.domain);
            // })
            .filter(project => {
              return filter.includes(project.guide_name);
            })
            .filter(project => {
              return year.includes(project.year);
            })

            .map(project => {
              return (
                <div key={project.id}>
                  <ProjectSummary project={project} props={props} />
                </div>
              );
            })
        : domain && year
        ? projects &&
          projects
            // .filter(project => {
            //   return filter.includes(project.domain);
            // })
            // .filter(project => {
            // ;
            // })
            .filter(project => {
              return domain.includes(project.domain);
            })
            // .filter(project => {
            //   return filter.includes(project.guide_name);
            // })
            .filter(project => {
              return year.includes(project.year);
            })

            .map(project => {
              return (
                <div key={project.id}>
                  <ProjectSummary project={project} props={props} />
                </div>
              );
            })
        : filter || domain || year
        ? projects &&
          projects
            // .filter(project => {
            //   return filter.includes(project.domain);
            // })
            .filter(project => {
              return (
                filter.includes(project.guide_name) ||
                domain.includes(project.domain) ||
                year.includes(project.year)
              );
            })
            .map(project => {
              return (
                <div key={project.id}>
                  <ProjectSummary project={project} props={props} />
                </div>
              );
            })
        : projects &&
          projects.map(project => {
            return (
              <div key={project.id}>
                <ProjectSummary project={project} props={props} />
              </div>
            );
          })}
    </div>
  );
};

export default ProjectList;
