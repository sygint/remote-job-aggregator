import fs from "fs";

import { request, loadHtml, scrapers } from "./utilities";

const { Remotive } = scrapers;
const remotive = Remotive(request, loadHtml);

export default async function aggregate() {
  try {
    const jobs = await remotive.scrape();

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