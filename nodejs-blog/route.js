const fs = require(fs/promises);
const path = require('path');

const handleHomeRequest = function(request, response) {
    var indexHtml = path.join(__dirname, 'static', 'index.html');
 
    fsPromises.readFile(indexHtml)
       .then(function(data) {
          response.setHeader('content-type', textType.html);
          response.writeHead(200);
          response.end(data);
       })
       .catch(function(error) {
          console.error(error);
       });
 }; // handleHomeRequest
 
 const handlePostRequest = function(request, response) {
    response.end('Post');
 }; // handlePostRequest
 
 const handleAssetRequest = function(request, response) {
    response.end('Asset');
 }; // handleAssetRequest
 
 const handleOopsRequest = function(request, response) {
    response.end('Not found');
 }; // handleOopsRequest
 
 // Xuất khẩu các thành phần của module
 // muốn chia sẻ cho code bên ngoài sử dụng
 module.exports = {
    handleHomeRequest,
    handlePostRequest,
    handleOopsRequest,
    handleAssetRequest
 }; // exports