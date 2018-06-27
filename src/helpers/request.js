const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      console.err(xhr.status);
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);

    onComplete(data);
  });

  xhr.send();

};

module.exports = Request;
