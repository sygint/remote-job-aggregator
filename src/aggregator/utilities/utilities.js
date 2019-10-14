import axios from "axios";
import cheerio from "cheerio";

export async function request(url) {
  console.log('requesting:', url);
  try {
    const res = await axios(url);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const loadHtml = cheerio.load;
