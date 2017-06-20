var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
// // use it before all route definitions
// app.use(cors({origin: 'http://localhost:8888'}));


//[44545,34425,21212,44241,45424];
app.get('/getTableData',function(req,res){
      // var newTableData = [];
      // for(var i=0; i<tableData.length; i++){
      //     newTableData.push(tableData[i] + (tableData[i+1] || 0))
      // }
      var tableData = [
        {name:"eucad", currentBestBidPrice:1.3436782140303525,currentBestAskPrice:1.405078337751889, bestBidLastChange:-0.04967860599814489, bestAskLastChanged: -0.10059927874590646},
        {name:"usdeur", currentBestBidPrice:0.8441119329187556,currentBestAskPrice:0.8823722746424465, bestBidLastChange:0.0037270852783077846, bestAskLastChanged: -0.005863751195455125},
        {name:"gbpcad", currentBestBidPrice:1.3436782140303525,currentBestAskPrice:1.405078337751889, bestBidLastChange:-0.04967860599814489, bestAskLastChanged: -0.10059927874590646},
        {name:"gbpeur", currentBestBidPrice:1.3436782140303525,currentBestAskPrice:1.405078337751889, bestBidLastChange:-0.04967860599814489, bestAskLastChanged: -0.10059927874590646},
        {name:"eurchf", currentBestBidPrice:1.3436782140303525,currentBestAskPrice:1.405078337751889, bestBidLastChange:-0.04967860599814489, bestAskLastChanged: -0.10059927874590646},
        {name:"gbpaud", currentBestBidPrice:1.3436782140303525,currentBestAskPrice:1.405078337751889, bestBidLastChange:-0.04967860599814489, bestAskLastChanged: -0.10059927874590646},
      ]
      // newTableData = tableData;
      res.send(tableData);
});

app.get('/',function(req,res){
  res.send("Hello world from server.js");
});
app.listen(3001);
console.log("Server running on port 8888");
