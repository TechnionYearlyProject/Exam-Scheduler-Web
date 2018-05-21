import { sendRequest } from './request';
import { setCookie } from './cookie';

function getFaculties() {
  sendRequest('GET', '/api/faculty/list', null, function (res) {
    var select = document.getElementById('faculty');
    var faculties = JSON.parse(res);
    for (var i in faculties) {
      var option = document.createElement('option');
      option.innerHTML = faculties[i].name;
      select.appendChild(option);
    }
  })
}

function login() {
  var name = document.getElementById('faculty').value;
  var password = document.getElementById('password').value;
  var json = {"name": name, "password": password};
  sendRequest('POST', '/api/login', json, function (res) {
    var data = JSON.parse(res);
    if (data.auth) {
      setCookie('token', data.token);
      window.location.href = "/scheduler";
    } else {
      console.log('Error');
    }
  })
}

window.addEventListener('load', getFaculties, false);
window.addEventListener('submit', login, false);