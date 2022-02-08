# WoT-pages

The content will be exposed to
* https://www.w3.org/WoT/ and
* https://w3c.github.io/wot-marketing/

## Testing site locally

We use Jekyll and Bundler to develop this webpage.

You can look at the [official documentation](https://jekyllrb.com/docs/) on how to install the two packages.

### Installing the Dependencies

- Run `bundle install` . This will install all the dependencies via bundler using the Gemfile

### Generating the Webpage

- During development, you can use one of the following to dynamically render the page with each change and make it available at `localhost`:
  - `bundle exec jekyll serve` to use the default config
  - `bundle exec jekyll serve --config _config.yml,_config_dev.yml` to use another config

- For deployment where you want to have the static HTML sources, you can use
  - `bundle exec jekyll build` which will make the sources available at `_site` folder

### Adding dependencies

When you want to add dependencies, like [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap), you should do this by one of the following ways:
- Add the dependency to the Gemfile and run `bundle update` which will install the dependency
- Run `bundle add jekyll-sitemap` which will install the dependency and modify the Gemfile automatically
