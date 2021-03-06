import { getCookie } from './cookie';

export function sendRequest (type, url, json, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      callback(request.responseText);
    }
  };
  request.open(type, url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('x-access-token', getCookie('token'));
  request.send(JSON.stringify(json));
}