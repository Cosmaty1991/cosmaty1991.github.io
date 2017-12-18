document.querySelector('form').onsubmit = function() {
  const urls = [
    'https://swapi.co/api/people/' + document.querySelector('.people').value + '/',
    'https://swapi.co/api/species/' + document.querySelector('.species').value + '/',
    'https://swapi.co/api/planets/' + document.querySelector('.planets').value + '/',
    'https://swapi.co/api/vehicles/' + document.querySelector('.vehicles').value + '/'
  ];

  Promise.all(urls.map(url => {
    return fetch(url)
      .then(response => response.json())
      .then(response => document.querySelector('.result').innerHTML += '<li>' + response.name + '</li>')
      .catch(error => console.error(error))
  }))
}
