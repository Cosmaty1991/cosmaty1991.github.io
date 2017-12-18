document.querySelector('form').onsubmit = function(e) {
  const file = this.files[0];
  const formData = new FormData();

  formData.append('image1', file);
  formData.append('image2', file);
  formData.append('image3', file);

  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'http://localhost:8080/upload', true);

  xhr.upload.onprogress = function(e) {
    if (e.lengthComputable) {
      var perc = (e.loaded / e.total) * 100;
      console.log(perc + '% uploaded');
    }
  }

  xhr.onload = function() {
    if (this.status === 200) {
      var resp = JSON.parse(this.response);
      var image = document.createElement('img');

      image.src = resp.dataUrl;
      document.body.appendChild(image);
    };
  };

  xhr.send(formData);
}, false;
