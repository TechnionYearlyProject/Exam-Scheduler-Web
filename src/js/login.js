import { sendRequest } from './request';

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

window.addEventListener('load', getFaculties, false);