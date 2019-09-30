import React, { Component } from "react";
import { Helmet } from "react-helmet";

import GlobalStyles from "./components/GlobalStyle";
import JobList from "./components/JobList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      jobs: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/.netlify/functions/get-jobs`);
      const { success, jobs, error } = await res.json();

      if (!success || !jobs) {
        if (error) {
          throw Error(error);
        }

        throw Error("unknown error unknown");
      }

      if (!jobs) {
        return this.setState({ isLoading: false, jobs: [] });
      }

      console.log("jobs found, setting state...");
      return this.setState({ isLoading: false, jobs });
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  render() {
    const { isLoading, jobs } = this.state;

    if (isLoading) {
      console.log("loading...");
      return "loading";
    }

    if (jobs.length === 0) {
      console.log("unknown error...");
      return "error";
    }

    console.log("rendering jobs...");

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Remote Job Aggregator</title>
        </Helmet>

        <GlobalStyles />

        {/* <Nav /> */}

        <JobList jobs={jobs} />
      </>
    );
  }
}

export default App;
