var xhr = new XMLHttpRequest();
var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

xhr.onload = function() {
  if (xhr.status === 200) {
    generateTable(xhr.responseText);
  }
}

xhr.open('GET', url, true);
xhr.send();

function generateTable(response) {
  var data = JSON.parse(response);
  var arr = data;

  var table = '<table><tr><th>#</th><th>Camper Name</th><th>Overall Score</th></tr>';

  arr.forEach(function(i, item, arr) {
    table += '<tr><td>'+ (item + 1) + '</td><td>' + arr[item].username + '</td><td>' + arr[item].alltime + '</td></tr>';
  });

  table += '</table>';
  document.getElementById('table').innerHTML = table;
}
