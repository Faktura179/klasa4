var data = require("./data/zones.json")
const http = require("http")
var server = http.createServer(function (req, res) {

    console.log(req.method) // przy pobraniu danych json - GET

    switch (req.method) {
        case "GET":
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end(JSON.stringify(data, null, 4))
            break;
            
        case "OPTIONS":
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end();
            break;

        case "POST":
            var body = "";
            req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {               
                var jsonObj = JSON.parse(body);
                console.log(jsonObj); // tu mamy dostępne dane, które można wykorzystać na serwerze
            })
            //
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end(JSON.stringify({ data: "anyobject" })) // ostatecznie odsyłamy jsona do klienta
            break;
    }
    
})
server.listen(3000, function () {
    console.log("zadanie 15 - serwer działa na porcie 3000")
})