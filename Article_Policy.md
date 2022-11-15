# Policy for Choosing WoT-related Articles

The Web of Things Marketing Task Force collects articles about the Web of Things in their webpage at [docs/about/articles/index.html](docs/about/articles/index.html).
This policy document explains the process for choosing articles to be listed there.

The overall aim is to make sure that the information in the article is correct while not being biased in the selection process.

## Procedure for Non-scientific Publications

These are blog posts, press releases, developer guides and news articles published by anyone, including third parties with no relationship with the W3C or WoT WG member companies.

Our process is:

- The reviews for the articles must happen over GitHub Issues. All articles should be submitted first as an issue with a title prefixed with `[Article]`.  The GitHub user opening the issue is not important but the issue should contain a link to the article in review that has the information about the author or publisher and publication date. Opening of the issue will trigger a review process detailed below:
  - If an IG or WG member (organization or individual) was involved in the writing process, a member not involved with that organization or an invited expert should review the article.
  - If the entire IG or WG was involved in the writing process and the publication was approved by an IG or WG meeting, it can be included without further reviews. These are typically press releases by the W3C or collaboration with the publishers.
  - For third party articles, at least two member organization participants or invited experts should review the article.
  - The reason to include or not to include the article should be documented in the issue. The reviewers should state the following information:
    - Presence of relationship with the W3C or a WG or IG member organization or person: Answer should be `None Identified` or the name of the member organization or person.
    - Decision: Answer should be `Rejected` or `Approved`
    - Reason: If the article is rejected, an objective statement should be provided pointing to the source of wrong information. If the article is simply not about the W3C Web of Things, i.e. it is not relevant, this should be stated. If the article is approved, summary of the article should be provided in the form of a paragraph.
  - If there are at least two approvals and no rejections, a GitHub Pull Request can be created to include the article in the correct chronological location. The Pull Request should link to the issue.
  - The PR to include any article should be kept open for at least 1 week in order for the whole group to review it.
  - A review of the PR must be done via approving it over GitHub.
- The IG and WG cannot search the entire Web to find all relevant articles. Thus, it cannot be counted accountable for not including a certain article. If a related article is identified, it should be submitted as a GitHub Issue.
- If the authors of the article address the concerns about why the article is rejected, the article can be submitted again after the changes.
- The exact same article cannot be submitted again within 12 months of closing the issue. This is not valid if there are changes to the article.
- As long as there are no two or more articles in review at the same time, the task force aims to review the article latest in one month.

## Criteria for Scientific Publications

There are scientific publications that use Web of Things or improve upon some of the mechanisms.
They are generally peer reviewed as part of a conference or journal publication.
However, due to varying quality of review and selection procedure, there can be publications that we do not accept.

Our process is:

- The same review process as above must be conducted with the following differences:
  - A link to the publication should be made available that does not require any payment or login procedure to read the article. This allows the article to be reviewed in a transparent fashion and also allows it to be read by the interested parties.
  - If the original publication is behind a payment system, an author's version is accepted.
