var request = require("sync-request");
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

var db;
MongoClient.connect('mongodb://admin:password@ds115411.mlab.com:15411/quickquote', (err, database) => {
  if(err) return console.log(err);
  db = database;
  app.listen(8081, () => {
    console.log('listening on 8081')
  })
})

function getQuote(stockCode){

  var d = new Date();
  var a = d.getTime();

  var response = request("GET", "http://www.dbpower.com.hk/ch/quote/quote-stock/code/"+stockCode);

  var d2 = new Date();
  var b = d2.getTime();
  console.log((b-a)/1000);

  var body = response.getBody().toString();

  var n1;
  var n2;
  var n3;
  var n4;
  var body2;

  var stockInfo = {
    closePrice: "",
    stockName: "",
    priceChange: "",
    priceUpOrDown: "",
    priceHigh: "",
    priceLow: "",
    priceOpen: "",
    pricePrevClose: "",
  };

  body2 = body.substring(body.search('<!--Search with Hsi Panel ends-->'), body.search('"last_update right"'));

  //Get quote
  n1 = body2.search('"quote"');
  n2 = body2.indexOf("</li>", n1);
  n3 = body2.substring(n1+8, n2);
  stockInfo.closePrice = n3;

  //Get stock name
  n1 = body2.search('"cp_title"');
  n2 = body2.indexOf("</h2>", n1);
  n3 = body2.substring(n1+31, n2);
  stockInfo.stockName = n3;

  //Get price high
  n1 = body2.search('"general bigger"');
  n2 = body2.indexOf("</dd>", n1);
  n3 = body2.substring(n1+77, n2);
  stockInfo.priceHigh = n3;

  //Get price low
  n1 = body2.search('"general bigger"');
  n2 = body2.indexOf("</dl>", n1);
  n3 = body2.substring(n1+147, n2-25).replace(">", "").replace("dd", "").replace("d", "");
  stockInfo.priceLow = n3;

  //Get price open
  n1 = body2.search('"cluster-2 fake-last-child"');
  n2 = body2.indexOf("</dd>", n1);
  n3 = body2.substring(n1+135, n2);
  stockInfo.priceOpen = n3;

  //Get price prev close
  n1 = body2.search('"cluster-2 fake-last-child"');
  n2 = body2.indexOf("</dl>", n1);
  n3 = body2.substring(n1+205, n2-25).replace(">", "").replace("dd", "").replace("d", "");
  stockInfo.pricePrevClose = n3;

  //Get the change
  n1 = body2.search('"change"');
  n2 = body2.indexOf("</span>", n1);
  n3 = body2.substring(n1, n2);
  n4 = n3.indexOf("-");
  stockInfo.priceUpOrDown = "down";
  if(n4 < 0){
    n4 = n3.indexOf("+");
    stockInfo.priceUpOrDown = "up";
  }
  n4 = n3.substring(n4, n4+16);
  stockInfo.priceChange = n4.replace("+0.000%)", "+0.000%");
  stockInfo.priceChange = stockInfo.priceChange.substring(1, 6);

  return stockInfo;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/getQuote', function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(getQuote(req.query.name)));
})

app.post('/getQuotes', function (req, res) {
  var myFavoriteStock = JSON.parse(req.body.json);

  myFavoriteStock.forEach(function(stockInfo){
    Object.assign(stockInfo, getQuote(stockInfo.stockName.substring(0, 5)));
  });

  res.set("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(myFavoriteStock));
})

app.post('/updateMyFavoritesStock', function (req, res) {
  db.collection('appJson').findOneAndUpdate({id: 'myFavoriteStock',loginName: req.body.loginName}, {
    $set: req.body
  }, {
    upsert: true
  }, (err, result) => {
    if (err) return res.send(500, err);
    res.send(200, err)
  })
})

app.get('/getMyFavoritesStock', function (req, res) {
  db.collection('appJson').findOne({id: 'myFavoriteStock',loginName: req.query.loginName}, function(err, results) {
    if (err) throw err;
    res.set("Access-Control-Allow-Origin", "*");
    if(results){
        res.send(results.json);
    }else{
        res.send("[]");
    }
  });
})
