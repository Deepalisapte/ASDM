var http=require('http');  

var Customer =[{
    Name:"Deepali",
    Address:"Pune",
    Mobile:123456,

},
{Name:"Nirbhay",
    Address:"Mumbai",
    Mobile:234545,

},
{
Name:"Saras",
    Address:"Nashik",
    Mobile:456576,

}
];


var service=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(Customer));
};
var server=http.createServer(service);
server.listen(8080);
console.log("listening on port 8080");

