import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import MapStyle from './map-style';
import { getLocationData } from './api';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

class App extends Component {
  state = {
    mapStyle: MapStyle,
    counts: {},
  };

  componentDidMount() {
    getLocationData.then(data => this.setState({
      counts: data,
    }))
  }

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={token}
        mapStyle={this.state.mapStyle}
        width={window.innerWidth}
        height={window.innerHeight}
        latitude={45.536339}
        longitude={-122.5842598}
        zoom={11}
        onViewportChange={(viewport) => {
          // const { width, height, latitude, longitude, zoom } = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
    );
  }
}

export default App;
