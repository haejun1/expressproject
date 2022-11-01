const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routers/shopRouter');
const cartRoutes = require('./routers/cartRouter');
const reviewRoutes = require('./routers/reviewRouter');
const logInRoutes = require('./routers/logInRouter');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
//메인 디렉토리는 public file 내 정적파일들을 찾음

app.use(shopRoutes);
app.use('/cartRouter', cartRoutes);
app.use('/reviewRouter', reviewRoutes);
app.use('/logInRouter', logInRoutes);


app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3001);

