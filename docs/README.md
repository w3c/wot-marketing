# WoT Web Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/d51b6c04-7def-43c0-8566-4f16ed11c213/deploy-status)](https://app.netlify.com/sites/wot-marketing/deploys)

The content will be exposed to
* https://www.w3.org/WoT/ (official page)
* https://w3c.github.io/wot-marketing/ (GitHub pages render)
* https://wot-marketing.netlify.app/ (Netlify is used for PR previews and build badge)

## Contribution Rules

- We work only with PRs. 
- The changes that do not need a special meeting are: 
  - Link updates
  - Typo corrections
  - Adding a single item to a list (devtools, TFs, events). 
- Adding or removing pages, adding or removing paragraphs or changing significant part of paragraphs need a special meeting.
- The PRs should have the corresponding labels: needs-WG-review, time-critical (for bringing to main call), minor (editorial, technical and trivial changes). If the type of PR needed is clear from the issue, these labels can be also used in an issue.
- Only W3C WoT IG members can contribute to this page.

## Testing site locally

We use Jekyll and Bundler to develop this webpage.

You can look at the [official documentation](https://jekyllrb.com/docs/) on how to install the two packages.

If you are using MacOS, please refer to the [official MacOS installation guide](https://jekyllrb.com/docs/installation/macos/).

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

## Video Thumbnails

When you are adding new videos, you should add thumbnails. 
In order to have the consistency of the images, please use [this browser extension](https://chrome.google.com/webstore/detail/screenshot-youtube/gjoijpfmdhbjkkgnmahganhoinjjpohk).
You can pick any particular point in the video but try to highlight the event or the specific property of the presentation.

## Netlify Configuration

We are using [Netlify](https://www.netlify.com/) to build previews for PRs.
We are using an open source account from Netlify with all TF members having access to it.
If the TF is not responding to possible failures in the pipeline, another person has to do everything. This means the following:

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
