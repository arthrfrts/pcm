source "https://rubygems.org"

gem "jekyll", "~> 4.2"
gem "webrick", "~> 1.7"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15.1"
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-seo-tag", "~> 2.7.1"
  gem "jekyll-archives", "~> 2.2.1"
  gem "jekyll-paginate", "~>  1.1.0"
  gem "jekyll-compose", "~> 0.12.0"
  gem "jekyll-loading-lazy", "~> 0.1.1"
  gem "jekyll-include-cache", "~> 0.2.1"
end

install_if -> { Gem.win_platform? } do
  gem "wdm", "~> 0.1.1"
  gem "tzinfo", "~> 2.0.4"
  gem "tzinfo-data"
end
