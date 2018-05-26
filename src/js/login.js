import { sendRequest } from './request';
import { setCookie } from './cookie';

function getFaculties() {
  sendRequest('GET', '/api/faculty/list', null, function (res) {
    let select = document.getElementById('faculty');
    let faculties = JSON.parse(res);
    for (let i in faculties) {
      let option = document.createElement('option');
      option.innerHTML = faculties[i].name;
      select.appendChild(option);
    }
  })
}

function login() {
  document.getElementById('error-message').style.display = 'none';
  let name = document.getElementById('faculty').value;
  let password = document.getElementById('password').value;
  let json = {"name": name, "password": password};
  sendRequest('POST', '/api/login', json, function (res) {
    let data = JSON.parse(res);
    if (data.auth) {
      console.log(data);
      setCookie('token', data.token);
      setCookie('faculty', data.username);
      window.location.href = "/scheduler";
    } else {
      document.getElementById('error-message').style.display = 'block';
    }
  })
}

window.addEventListener('load', getFaculties, false);
window.addEventListener('submit', login, false);
