import React from "react";
import PropTypes from "prop-types";
import { MOCK_PROJECTS } from "./MockProjects";

const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre>
    </>
  );
};

export default ProjectsPage;
