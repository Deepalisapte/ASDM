var http=require('http');  

var Entity_List =[{
    Name:"Customer",
    Attribute:"name",
   

},
{Name:"order",
    Attribute:"Order_date",

},
{
Name:"Product",
    Attribute:"name",
}
];


var service=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(Entity_List));
};
var server=http.createServer(service);
server.listen(7000);
console.log("listening on port 7000");

