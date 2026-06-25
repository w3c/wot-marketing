import './globals.css';

const basePath = process.env.GITHUB_PAGES === 'true' ? '/WoT' : '';
const defaultLocalePath = `${basePath}/en`;
const supportedLocales = ['en', 'de', 'es', 'ru', 'zh'];

export default function GlobalNotFound() {
  const redirectScript = `
    (function () {
      var basePath = ${JSON.stringify(basePath)};
      var defaultLocale = 'en';
      var supportedLocales = ${JSON.stringify(supportedLocales)};
      var localeLikeSegment = /^[a-z]{2}(?:-[a-z0-9]+)?$/i;
      var path = location.pathname;

      if (basePath && path.indexOf(basePath + '/') === 0) {
        path = path.slice(basePath.length);
      } else if (basePath && path === basePath) {
        path = '/';
      }

      var segments = path.split('/').filter(Boolean);
      var firstSegment = segments[0] || '';
      var pathWithoutLocale = localeLikeSegment.test(firstSegment) ? segments.slice(1).join('/') : segments.join('/');
      var targetPath = pathWithoutLocale ? '/' + defaultLocale + '/' + pathWithoutLocale : '/' + defaultLocale;

      if (supportedLocales.indexOf(firstSegment) !== -1) {
        targetPath = '/' + defaultLocale;
      }

      location.replace(basePath + targetPath + location.search + location.hash);
    })();
  `;

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <meta httpEquiv="refresh" content={`0; url=${defaultLocalePath}`} />
        <link rel="canonical" href={defaultLocalePath} />
        <script
          dangerouslySetInnerHTML={{
            __html: redirectScript,
          }}
        />
        <title>Redirecting | Web of Things</title>
      </head>
      <body>
        <p>
          Redirecting to the <a href={defaultLocalePath}>Web of Things</a> website...
        </p>
      </body>
    </html>
  );
}
