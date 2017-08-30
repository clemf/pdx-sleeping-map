import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { Panel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MapStyle from './map-style';
import { getLocationData } from './api';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

class App extends Component {
  state = {
    mapStyle: MapStyle,
    counts: {},
    active: null,
  };

  componentDidMount() {
    getLocationData.then(data => this.setState({
      counts: data,
    }))
  }

  onClick = year =>
    () => {
      this.setState({
        active: year,
      });
      this.updateStyle();
    }

  updateStyle = () => {
    if (this.state.active) {
      const features = this.state.mapStyle
        .getIn(['sources', 'sleepingBoundaries', 'data', 'features'])
        .map(feature => {
          return feature.setIn(
            ['properties', 'count'],
            this.state.counts[feature.getIn(['properties', 'name'])][this.state.active]
          );
        });
      const newStyle = this.state.mapStyle
        .setIn(['sources', 'sleepingBoundaries', 'data', 'features'], features);
      this.setState({
        mapStyle: newStyle,
      });
    }
  }

  render() {
    return (
      <div>
          { Object.keys(this.state.counts).length ?
            <Panel className="controls" header="PIT Report Sleeping Locations">
              <Button active={this.state.active === 2011} onClick={this.onClick(2011)}>
                January 26th, 2011
              </Button>
              <Button active={this.state.active === 2013} onClick={this.onClick(2013)}>
                January 30th, 2013
              </Button>
              <Button active={this.state.active === 2015} onClick={this.onClick(2015)}>
                January 28th, 2015
              </Button>
            </Panel>
            : null }
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
      </div>
    );
  }
}

export default App;
