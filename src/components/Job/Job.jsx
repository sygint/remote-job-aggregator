import React from "react";
// import PropTypes from "prop-types";

import {
  JobListItem,
  JobDetails,
  JobDetailsMain,
  JobDescription,
  CompanyName,
  Tag,
  PostedDate
} from "./styles";

function Job({ job }) {
  const { company, description, location, position, tags, postedDate, url } = job;
  return (
    <JobListItem>
      <JobDetails href={url}>
        <JobDetailsMain>
          <div>{position}</div>
          <CompanyName>{company} {location && <span>({location})</span>}</CompanyName>
          <div>{tags && tags.length > 0 && tags.map(tag => <Tag>{tag}</Tag>)}</div>
        </JobDetailsMain>
        <PostedDate>{postedDate}</PostedDate>
      </JobDetails>
      <JobDescription dangerouslySetInnerHTML={{ __html: description }} />
    </JobListItem>
  );
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

export default Job;