// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-trends-scraper').call({
  "searchTerms": [
    "chatgpt",
    "gemini",
    "claude ai"
  ],
  "geo": "US",
  "timeRange": "today 12-m"
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.searchTerm, item.trendDirection, item.changePercent, item.summary);
