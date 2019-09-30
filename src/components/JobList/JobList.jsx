import React from "react";
// import PropTypes from "prop-types";

import Job from "../Job";

import {
  JobListContainer
} from "./styles";



function JobList({ jobs: jobList }) {
  return (
    jobList.map(({ category, jobs }) => (
      <>
        <h2>{category}</h2>
        <JobListContainer>
          {jobs.map(job => <Job job={job} />)}
        </JobListContainer>
      </>
    )
  ))
}

// JobList.propTypes = {
//   jobs: PropTypes.shape([
//     PropTypes.shape({
//       company: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       position: PropTypes.string.isRequired,
//       tags: PropTypes.shape([
//         PropTypes.string
//       ])
//     })
//   ])
// };

export default JobList;
