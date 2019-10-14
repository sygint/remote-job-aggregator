const fs = require("fs");
const fetch = require("node-fetch");


const port = parseInt(process.env.PORT, 10) || 8888;
const dev = process.env.NODE_ENV !== "production";
const url = dev ? `http://localhost:${port}` : 'https://job-app.netlify.com';

async function aggregate() {
  try {
    const res = await fetch(`${url}/.netlify/functions/get-jobs`);
    const { success, jobs, error } = await res.json();

    if (!success || !jobs) {
      if (error) {
        throw Error(error);
      }

      throw Error("unknown error unknown");
    }

    if (!jobs) {
      throw Error("no jobs returned");
    }

    console.log("jobs found, setting state...");
    fs.writeFile('./src/jobs.json', JSON.stringify(jobs), { flag: 'w+' }, (err) => {
      if (err) throw err;
      console.log('jobs aggregated!');
    });
  } catch (error) {
    console.log(error);
  }

  return [];
}

aggregate();
