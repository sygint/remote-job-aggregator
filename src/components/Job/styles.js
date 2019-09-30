import styled from "styled-components";

export const JobListItem = styled.li`
    list-style: none;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: #eee;
    border-radius: 5px;
`;

export const JobDetails = styled.div`
    display: flex;
    align-items: center;
`;

export const JobDetailsMain = styled.div`
    flex: 1;
`;

export const CompanyName = styled.div`
    font-weight: bold;

    span {
        font-weight: normal;
    }
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 0.45rem;
    margin: 0.5rem 0.25rem;
    background: #fff;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    &:first-child {
        margin-left: 0;
    }
`;

export const PostedDate = styled.span`
    padding: 0 0.5rem;
    font-size: 12px;
    /* padding: 0 10px 0 40px; */
`;

export const JobDescription = styled.div`
    display: none;
`;