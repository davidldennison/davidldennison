I'm an SEO and Content Marketing Freelancer!

<a href="https://app.daily.dev/DavidDennison"><img src="https://api.daily.dev/devcards/5b8f9c1fd1604026b5d008473b23c0d8.png?r=r47" width="400" alt="David Dennison's Dev Card"/></a>


name: daily.dev Bookmarks
on:
  schedule:
    # Runs every hour
    - cron: '0 * * * *'
  workflow_dispatch:

jobs:
  daily-dev-bookmarks:
    name: Update this repo's README with latest bookmarks from daily.dev
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "daily.dev BOOKMARKS"
          feed_list: "https://api.daily.dev/rss/b/2d7dc6c0-3dfc-4d0b-939a-82c4cba2babd"
