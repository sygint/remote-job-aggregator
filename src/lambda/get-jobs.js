// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import { request, loadHtml, scrapers } from "./utilities";

const { Remotive } = scrapers;
const remotive = Remotive(request, loadHtml);

export async function handler() {
  try {
    const jobs = await remotive.scrape();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, jobs })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ succes: false, error: err.message })
    };
  }
}
