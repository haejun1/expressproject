const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/reviewRouterFile', (req, res, next) => {
  res.render('reviewView', {
    pageTitle: '리뷰',
    path: '/reviewRouter/reviewRouterFile'
  });
});

module.exports = router;