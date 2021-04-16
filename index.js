'use strict';
const createRouter = require('@arangodb/foxx/router');
const router = createRouter();

router.get('/hello-world', function (req, res) {
    res.send('Hello World!');
  })

module.context.use(router);