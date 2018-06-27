const CountryInfo = require('./model/country_info.js');
const SelectCountry = require('./views/select_country.js');
const DisplayCountry = require('./views/display_country.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryInfo = new CountryInfo();
  countryInfo.getData();

  const selectCountry = document.querySelector('select#countries');
  const countryDropdown = new SelectCountry(selectCountry);
  countryDropdown.bindEvents();

  const getContainer = document.querySelector('div#country');
  const displayCountry = new DisplayCountry(getContainer);
  displayCountry.bindEvents();
});
