import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import MapStyle from './map-style';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

class App extends Component {
  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={token}
        mapStyle={MapStyle}
        width={window.innerWidth}
        height={window.innerHeight}
        latitude={45.5433229}
        longitude={-122.794504}
        zoom={10}
        onViewportChange={(viewport) => {
          // const { width, height, latitude, longitude, zoom } = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
    );
  }
}

export default App;
