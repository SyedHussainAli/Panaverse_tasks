// Define the describeCity function with a default country
function describeCity(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the describeCity function for three different cities
  describeCity('Karachi');
  describeCity('Islamabad');
  describeCity('London', 'United Kingdom');