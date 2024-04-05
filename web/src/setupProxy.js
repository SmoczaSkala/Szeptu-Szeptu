const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    [
      "/api/users",
      "/api/messages/received",
      "/api/messages/sent",
      "/api/user/login",
      "/api/messages/send",
    ],
    createProxyMiddleware({
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
};
