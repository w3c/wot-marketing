async function fetchWithHeaders(url: string) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Awesome-Octocat-App",
    },
  });
  if (!res.ok) {
    throw new Error("Could not fetch: " + url);
  }
  return await res.json();
}
