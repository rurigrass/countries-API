const PubSub = require('../helpers/pub_sub.js');

const SelectCountry = function(selectCountry) {
  this.selectCountry = selectCountry;
};

SelectCountry.prototype.bindEvents = function () {
  PubSub.subscribe('CountryInfo:country-name', (event) => {
    const allCountries = event.detail;
    // console.log(allCountries);
    this.populate(allCountries);
  });

  this.selectCountry.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectCountry:change', selectedIndex);
  })
};

SelectCountry.prototype.populate = function (countryData) {
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.selectCountry.appendChild(option);
  })
};

module.exports = SelectCountry;
