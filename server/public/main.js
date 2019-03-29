const displayMessage = document.querySelector('#display-message');
const submitButton = document.querySelector('#button-blue');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const api = 'http://localhost:3333/api';
const jwToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU1MzU5OTg1M30.zNctbGYEW_8KCoWorRq0Q8-Tn_R96dVwEhDRcgkQoxk';

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  addUserToDB();
});

function addUserToDB() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', api + '/projects/?token=' + jwToken, true);

  xhr.onload = function() {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);

      displayMessage.innerHTML = data;
    }
  };

  xhr.send();
}
