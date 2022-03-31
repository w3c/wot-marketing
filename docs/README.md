# WoT Web Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/d51b6c04-7def-43c0-8566-4f16ed11c213/deploy-status)](https://app.netlify.com/sites/wot-marketing/deploys)

The content will be exposed to
* https://www.w3.org/WoT/ (official page)
* https://w3c.github.io/wot-marketing/ (GitHub pages render)
* https://wot-marketing.netlify.app/ (Netlify is used for PR previews and build badge)

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

## Netlify Configuration

We are using [Netlify](https://www.netlify.com/) to build previews for PRs. Currently, they are done through @egekorkan 's private account that is linked to Netlify. 
If he were to not respond to possible failures in the pipeline, another person has to do everything. This means the following:

- Create a page/project at Netlify
- Link it to this GitHub repository
- Choose the following build settings
  - `docs` folder as base directory
  - `bundle install && bundle exec jekyll build` as build command
  - publish directory `docs/_site`
- For enabling PR Reviews, you also need to give the Netlify bot access to your account. Authorization from W3C is not needed.


See also: https://github.com/w3c/wot-marketing/issues/148#issuecomment-1058299754

## Adapting to Daylight Saving Changes
When a zone changes its time relative to UTC, you need to a bunch of changes. See [this PR](https://github.com/w3c/wot-marketing/pull/296) for concrete information
