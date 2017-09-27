'use strict';

const EXPRESS = require('EXPRESS');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
})

APP.get('/github/*', sendTheGit);

APP.get('*', function(request, response){
  response.sendFile('404.html', {root: './public'});
})

APP.listen(PORT, function(){
  console.log(`Express server currently running on port ${PORT}`);
})

function sendTheGit(request, response) {
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.github_token}`
    }
  }))(request, response);
}
