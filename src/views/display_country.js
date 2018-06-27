const PubSub = require('../helpers/pub_sub.js');

const DisplayCountry = function(container) {
  this.container = container;
};

DisplayCountry.prototype.bindEvents = function () {
  PubSub.subscribe('CountryInfo:selected-country-ready', (evt) => {
    const country = evt.detail;
    this.render(country);
  })

};

DisplayCountry.prototype.render = function (country) {

  this.container.innerHTML = '';

  const table = document.createElement('table')

  for (const key in country) {
    if (key =='image') { continue }
    const row = document.createElement('tr');

    const label = document.createElement('td');
    label.textContent = key;
    label.classList.add('country-label');

    const data = document.createElement('td');
    data.textContent = country[key];
    data.classList.add('country-data');

    table.appendChild(row)
    row.appendChild(label)
    row.appendChild(data)
  }

  this.container.appendChild(table)

};

module.exports = DisplayCountry;

/*
  <table>
    <tr>
      <td>Label</td>
      <td>Data</td>
    </tr>
  </table>
  */
