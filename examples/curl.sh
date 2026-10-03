#!/bin/bash
# export APIFY_TOKEN=your_token
curl -X POST "https://api.apify.com/v2/acts/automationnation~google-trends-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["chatgpt", "gemini", "claude ai"], "geo": "US", "timeRange": "today 12-m"}'
