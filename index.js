'use strict';
const createRouter = require('@arangodb/foxx/router');
const router = createRouter();

module.context.use(router);
router.get('/hello-world', function (req, res) {
res.send({'res':'Hello World!'});
});

router.get('/welcome', function (req, res) {
  res.send({'res':'Hello World!'});
  });