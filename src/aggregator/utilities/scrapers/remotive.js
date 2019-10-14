const softwareDevUrl = "https://remotive.io/remote-jobs/software-dev";
const customerSupportUrl = "https://remotive.io/remote-jobs/customer-support";
const designUrl = "https://remotive.io/remote-jobs/design";
const marketingSalesUrl = "https://remotive.io/remote-jobs/marketing-sales";
const productUrl = "https://remotive.io/remote-jobs/product";
const allOthersUrl = "https://remotive.io/remote-jobs/all-others";

export default function(request, scraper) {
  let $;

  async function scrape() {
    console.log('begin scraping...');
    const softwareDevHtml = request(softwareDevUrl);
    const customerSupportHtml = request(customerSupportUrl);
    const designUrlHtml = request(designUrl);
    const marketingSalesHtml = request(marketingSalesUrl);
    const productHtml = request(productUrl);
    const allOthersHtml = request(allOthersUrl);

    const jobsHtml = await Promise.all([
      softwareDevHtml,
      customerSupportHtml,
      designUrlHtml,
      marketingSalesHtml,
      productHtml,
      allOthersHtml
    ]);

    return jobsHtml.map(html => scrapeJobs(html, scraper));
  }

  function scrapeJobs(html, scraper) {
    $ = scraper(html);

    const category = $(".category-title .category-name")
      .text()
      .trim();
    const $jobListItems = $(".job-list-item");

    const jobs = $jobListItems
      .map(function() {
        return scrapeJobDetails($(this));
      })
      .get();

    return {
      category,
      jobs
    };
  }

  function scrapeJobDetails($details) {
    const position = $details
      .find(".position")
      .text()
      .trim();
    const company = $details
      .find(".company > span:not(.location)")
      .text()
      .trim();
    const location = $details
      .find(".location > span.location span")
      .text()
      .trim();
    const description = $details
      .find(".job-description")
      .html()
      .trim();
    const tags = scrapeTags($details);
    const postedDate = $details
      .find(".job-date")
      .text()
      .trim();

    return {
      position,
      company,
      location,
      description,
      tags,
      postedDate
    };
  }

  function scrapeTags($details) {
    let tags = [];

    $details.find(".job-tag").each(function() {
      tags.push(
        $(this)
          .text()
          .trim()
      );
    });

    return tags;
  }

  return { scrape };
}
