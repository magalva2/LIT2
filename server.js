var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;
var fs = require('fs');
const https = require('https');

var userKey = '94b5cfcbecccee165ca88464427c4743';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


app.get("/pullData", function (req, response){
    var searchId = req.query.searchId;
    var key = req.query.key;

    https.get('https://api.social-searcher.com/v2/searches/' + searchId + '/posts?period=recent&key=' + key, (res) => {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);

        var data = '';
        res.on('data', function(d) {
            data += d;
        });

        res.on('end', function(d) {
            //console.log(data);
            var rrr = JSON.parse(data);

	        //console.log(rrr);
            
            if(rrr.meta.http_code == 429)
            {   //console.log(searchId);
                response.send(searchId);
            }
            else
          
            response.send(data);
            // now you can do what you need to with it including passing it to the socket
        });

    })
    .on('error', (e) => {
        console.error(e);
    });
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);