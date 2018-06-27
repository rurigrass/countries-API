const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountryInfo = function () {
  this.countries = [];
};

CountryInfo.prototype.getData = function () {
  const request = new Request ('https://restcountries.eu/rest/v2/all');

  request.get((countryInfo) => {
    this.countries = countryInfo;
    PubSub.publish('CountryInfo:country-name', this.countries);

    PubSub.subscribe('SelectCountry:change', (evt) => {
    const selectedIndex = evt.detail;
    // console.log(selectedIndex);
    this.publishCountryDetails(selectedIndex);
    });

  });

};

CountryInfo.prototype.publishCountryDetails = function(countryIndex){
  const selectedCountry = this.countries[countryIndex];
  // console.log(selectedCountry);
  PubSub.publish('CountryInfo:selected-country-ready', selectedCountry);
};


module.exports = CountryInfo;
