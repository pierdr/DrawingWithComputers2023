const http = require('http');
const https = require('https');
const {image_search,image_search_generator} = require("duckduckgo-images-api");

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/search')) {
    const keyword = req.url.split('=')[1];
    // const duckDuckGoApiUrl = `https://api.duckduckgo.com/?q=${keyword}&format=json`;
        image_search({query:keyword,moderate:true}).then(results=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json',"Access-Control-Allow-Origin","*");
            if(results.length>0)
            {
                res.end(JSON.stringify({value:results[0].image}));
            }
            else{
                res.write();
                res.end(JSON.stringify({ value:"https://payload.cargocollective.com/1/23/757295/12958461/prt_1498290598.jpg"}));
            }
        })
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});