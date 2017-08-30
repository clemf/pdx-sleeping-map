import { fromJS } from 'immutable';
import Boundaries from './sleeping-boundaries';
import MapboxDark from './mapbox-dark.json';

const style = MapboxDark;

style.sources.sleepingBoundaries = {
  type: 'geojson',
  data: Boundaries,
};

style.layers.push({
  id: 'sleeping-boundary-polygons',
  source: 'sleepingBoundaries',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'count',
      stops: [
        [50, '#edf8fb'],
        [100, '#b2e2e2'],
        [200, '#66c2a4'],
        [300, '#2ca25f'],
        [400, '#006d2c'],
      ]
    },
    'fill-outline-color': 'black',
    'fill-opacity': 0.5,
  },
});

style.layers.push({
  id: 'sleeping-boundary-labels',
  source: 'sleepingBoundaries',
  type: 'symbol',
  layout: {
    'text-field': '{name}',
  },
  paint: {
    'text-halo-color': 'lightgrey',
    'text-halo-width': 2,
  }
});

export default fromJS(style);
