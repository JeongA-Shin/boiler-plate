const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', //현재 프론트엔드가 3000으로 들어와도 5000으로 보내주겠다
      changeOrigin: true,
    })
  );
};