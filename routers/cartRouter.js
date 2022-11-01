const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/cartRouterFile', (req, res, next) => {
  //,"../" 보다 깔끔하게 하기위헤 rootDir을 가져옴, dirname으로도 가능
  res.render('cartView', {
    pageTitle: '장바구니',
    path: '/cartRouter/cartRouterFile'
  });
});

module.exports = router;