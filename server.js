const http = require('node:http');

const port = Number(process.env.PORT ?? 3000);
const environment = process.env.ENVIRONMENT ?? 'Not set';

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

const server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.writeHead(405, { Allow: 'GET' });
    response.end('Method Not Allowed');
    return;
  }

  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MZ-UCA Cloud Platform</title>
  </head>
  <body>
    <h1>MZ-UCA Cloud Platform</h1>
    <p>Deployment status: Successful</p>
    <p>Environment: ${escapeHtml(environment)}</p>
  </body>
</html>`);
});

server.listen(port, () => {
  console.log(`MZ-UCA Cloud Platform listening on port ${port}`);
});
