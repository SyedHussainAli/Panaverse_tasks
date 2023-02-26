// Define the describeCity function with a default country
function describeCity(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the describeCity function for three different cities
describeCity('Karachi');
describeCity('Islamabad');
describeCity('London', 'United Kingdom');
