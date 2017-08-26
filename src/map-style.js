import { fromJS } from 'immutable';
import Boundaries from './sleeping-boundaries';
import MapboxDark from './mapbox-dark.json';

const style = MapboxDark;

style.sources.sleepingBoundaries = {
  type: 'geojson',
  data: Boundaries,
};

style.layers.push({
  id: 'sleeping-boundaries',
  source: 'sleepingBoundaries',
  type: 'fill',
  paint: {
    'fill-color': "#00ffff",
    'fill-outline-color': 'black',
    'fill-opacity': 0.5,
  },
});

export default fromJS(style);
