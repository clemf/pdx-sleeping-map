import Axios from 'axios';

const dictionary = {
  'downtown': 'Downtown',
  'SEPotland': 'SE',
  'innerNEPortland': 'Inner NE',
  'gresham': 'Gresham',
  'NWPortland': 'NW',
  'outerEPortland': 'Outer East Portland',
  'SWPortland': 'SW',
  'NPortland': 'N',
  'centralNEPortland': 'Central NE',
  'eastCounty': 'East County',
  'unknown': 'Unknown',
};

export const getLocationData = Axios.get('http://service.civicpdx.org/homeless/geolocation/')
  .then(response => {
    const data = response.data;

    const locationCounts = {};
    data.forEach(datum => {
      const { count, geographiclocation, year } = datum;
      const name = dictionary[geographiclocation];
      locationCounts[name] = locationCounts[name] || {};
      locationCounts[name][year] = count;
    })
    return locationCounts;
  });
