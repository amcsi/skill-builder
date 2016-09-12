const compress = require('compression');
const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, '..', 'dist')
/**
 * @param {express.res} res
 * @param {String} path
 */
function setCustomCacheControl(res, path) {
  if (path.endsWith('.html')) {
    // Custom Cache-Control for HTML files.
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

const staticMiddleware = express.static(publicPath, {
  maxage: 31557600,
  setHeaders: setCustomCacheControl
});

function notFoundMiddleware(req, resp) {
  resp.status(404).send('404 Not Found')
}
// Use gzip compression.
app.use(compress());
// Static files.
app.use('/', staticMiddleware);
// 404 not found.
app.use('*', notFoundMiddleware);

function onListen() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
}
const server = app.listen(process.env.PORT || 8080, onListen)
