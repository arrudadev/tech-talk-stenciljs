const { createServer } = require('http')
const { parse } = require('url')

const next = require('next')
const hydrate = require('@stencil-ui/core/hydrate');

const hostname = 'localhost'
const port = 3000

// when using middleware `hostname` and `port` must be provided below
const app = next({ hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)

      const { pathname, query } = parsedUrl

      if (pathname.match(/(.*?)\.(jpg|gif|svg|ico|css|js)$/)) {
        await handle(req, res, parsedUrl);
      } else {
        const html = await app.renderToHTML(req, res, pathname, query);
        const renderedHtml = await hydrate.renderToString(html);

        res.end(renderedHtml.html);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`Server ready on http://${hostname}:${port}`)
  })
})
