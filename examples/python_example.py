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
