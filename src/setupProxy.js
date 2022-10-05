const { createProxyMiddleware } = require('http-proxy-middleware')

// This middleware will setup React as a proxy server so that it can make requests to our backend on a different port. The backend and frontend have to run on different ports because they’re 2 different programs.
// Below, 'createProxyMiddleWare' creates the proxy to the 'api' to this domain 'http://localhost:4000'
// The target is the domain/port our backend is running on
//In the server on the backend, we prefixed all the roots with '/api'. This is so that can React know what is a backend route and what is a frontend route because both the frontend and backend have routes.


module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api',
      { target: 'http://localhost:4000' }
    )
  )
}
