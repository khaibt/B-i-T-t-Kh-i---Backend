// Khởi tạo 1 obj mô phỏng phần mềm tên là server,
// gắn 1 hàm xử lý yêu cầu handleRequest
const http = require("http");
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
var requestCount = 0;

const handleRequest = function (request, response) {
  requestCount += 1;
  console.log(requestCount + ": " + request.url);
  var routeJs = path.join(__dirname, "route.js");

  var route = require(routeJs);

  if (request.url == "/") 
    route.handleHomeRequest(request, response);
  else if (request.url.startsWith("/post"))
    route.handlePostRequest(request, response);
  else if (request.url.startsWith("/asset"))
    route.handleAssetRequest(request, response);
  else 
    route.handleOopsRequest(request, response);
  //
  //   var callback = function (error, data) {
  //     if (error) {
  //       throw error;
  //     } else {
  //   response.setHeader("content-type", "text/html"); //* "text/html" : hiển thị dưới dạng html, "text/plain": hiển thị dưới dạng văn bản thô
  //   response.statusCode = 200;
  //   response.end(data);
  //     }
  //   };

  /* dùng fsPromise */
//   fsPromises
//     .readFile(pathIndex)
//     .then(function (data) {
//       response.setHeader("content-type", "text/html"); //* "text/html" : hiển thị dưới dạng html, "text/plain": hiển thị dưới dạng văn bản thô
//       response.statusCode = 200;
//       response.end(data);
//     })
//     .catch(function (error) {
//       throw error;
//     });
};
const server = http.createServer(handleRequest);

/* Start running server */

const port = 3000;
const hostname = "127.0.0.1";

const callback = function () {
  console.log("Server is running at...");
  console.log(`http://${hostname}:${port}/`);
};

server.listen(port, hostname, callback);
