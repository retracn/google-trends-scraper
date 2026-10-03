# Google Trends Scraper & API: keyword trends and Trending now

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/google-trends-scraper)

Google Trends Scraper is an Apify Actor that extracts Google Trends data for any keywords and regions — interest over time, interest by region and city, rising and top related queries, and the trending searches for any country — at $1 per 1,000 keyword reports. It works as a Google Trends API: call it from code, schedule it for trend alerts, or let AI agents use it through Apify's MCP server.

**Price:** $1 per 1,000 keyword reports ($0.27–$0.90 on paid plans) · $0.50 per 1,000 trending searches · **Run it:** [https://apify.com/automationnation/google-trends-scraper](https://apify.com/automationnation/google-trends-scraper) · **Guide:** [https://retracn.github.io/automationnation-actors/google-trends-scraper/](https://retracn.github.io/automationnation-actors/google-trends-scraper/)

## Quick facts

- One row per keyword: the 0–100 timeline with dates, trend direction and change %, peak date, a one-sentence summary, interest by country / state / city, and top and rising related queries with growth % and Breakout flags.
- Trending now for any country: search volume, growth %, start time, related searches and news articles; Only new trends mode turns scheduled runs into alerts.
- Compare up to 5 terms like Google Trends, or any number of terms on one scale (rescaled through a shared anchor term).
- Every Google Trends option: any country or subregion, past hour to 2004–present or custom dates, category, and web / image / news / YouTube / Shopping search; input as keywords, Google Trends URLs or a Google Sheet.
- Price: $1 per 1,000 keyword reports and $0.50 per 1,000 trending searches on the Free plan (lower on paid plans); keywords with too little search volume are free. Apify's free $5 monthly credit covers about 5,000 keyword reports.
- Same input fields as apify/google-trends-scraper, and every row also includes that Actor's output fields.

## Example input

```json
{
  "searchTerms": [
    "chatgpt",
    "gemini",
    "claude ai"
  ],
  "geo": "US",
  "timeRange": "today 12-m"
}
```

## Run it from code

**REST API**

```bash
curl -X POST "https://api.apify.com/v2/acts/automationnation~google-trends-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["chatgpt", "gemini", "claude ai"], "geo": "US", "timeRange": "today 12-m"}'
```

**Python** — see [`examples/python_example.py`](examples/python_example.py)

```python
# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-trends-scraper").call(run_input={
  "searchTerms": [
    "chatgpt",
    "gemini",
    "claude ai"
  ],
  "geo": "US",
  "timeRange": "today 12-m"
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("searchTerm"), item.get("trendDirection"), item.get("changePercent"), item.get("summary"))
```

**JavaScript** — see [`examples/node_example.mjs`](examples/node_example.mjs)

```js
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
```

## Use it with AI agents (MCP)

Hosted MCP server URL (Claude, ChatGPT, Cursor and other clients with remote MCP support):

```
https://mcp.apify.com?tools=automationnation/google-trends-scraper
```

Local config for Claude Desktop / Cursor — [`mcp/claude_desktop_config.json`](mcp/claude_desktop_config.json):

```json
{
  "mcpServers": {
    "google-trends-scraper": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--tools",
        "automationnation/google-trends-scraper"
      ],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

## FAQ

**Is there an official Google Trends API?**
Google opened an official Google Trends API to a small group of alpha testers in 2025. For everyone else, Google Trends Scraper on Apify provides Google Trends data through Apify's REST API, Python and JavaScript clients, integrations and MCP.

**What does Google Trends Scraper return?**
For each keyword: interest over time (0–100 with dates), trend direction, change %, peak date, a one-sentence summary, interest by region and city, and top and rising related queries. Trending now rows include search volume, growth %, start time, related searches and news articles.

**Can it compare more than 5 keywords?**
Yes. With Compare all search terms on one scale, terms are batched around a shared anchor term and rescaled so any number of terms sit on one 0–100 scale.

**How much does it cost?**
$1 per 1,000 keyword reports and $0.50 per 1,000 trending searches on Apify's Free plan, less on paid plans. Keywords without enough search volume and failed searches are free.

**Can I switch from apify/google-trends-scraper?**
Yes. Keep your input (searchTerms, isMultiple, timeRange, customTimeRange, geo, category, startUrls, spreadsheetId, maxItems) and change the Actor ID; rows keep that Actor's field names next to the cleaner ones.

## More from AutomationNation

- [Google Jobs Scraper](https://apify.com/automationnation/google-jobs-scraper) — $2 per 1,000 jobs ($1.50 on paid plans) + $0.03 per search · [GitHub examples](https://github.com/retracn/google-jobs-scraper)
- [App Store Reviews Scraper](https://apify.com/automationnation/app-store-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/app-store-reviews-scraper)
- [Google Play Reviews Scraper](https://apify.com/automationnation/google-play-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/google-play-reviews-scraper)
- [AEO & GEO Tracker — Google AI Overview Citation Checker](https://apify.com/automationnation/aeo-auditor) — $0.04 per keyword ($0.032 on Gold), plus $2 per run from 17 Nov 2026; $0.01 per keyword until 16 Oct 2026 · [GitHub examples](https://github.com/retracn/google-ai-overview-tracker)
- [Google Maps Leads Scraper UK](https://apify.com/automationnation/uk-business-leads) — $0.05 per lead ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/uk-business-leads-google-maps)
- [App Store & Google Play Reviews Scraper + AI](https://apify.com/automationnation/app-store-review-miner) — $0.05 per app report ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/app-store-google-play-reviews-ai)
- [UK Companies House Leads — Filing Signals & AI Outreach](https://apify.com/automationnation/companies-house-leads) — $0.008 per lead
- [Contact Waterfall Enrichment — Emails & Directors](https://apify.com/automationnation/contact-waterfall-enrichment) — $0.015 per company
- [All Actors and guides](https://retracn.github.io/automationnation-actors/) · [Google Jobs scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-jobs-scrapers/) · [Google Trends scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-trends-scrapers/) · [App Store review scrapers compared](https://retracn.github.io/automationnation-actors/compare/app-store-review-scrapers/) · [Google Play review scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-play-review-scrapers/)

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/google-trends-scraper); you need a free Apify account and API token. Examples are MIT licensed.
