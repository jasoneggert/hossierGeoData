import React from 'react'

import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import createMapOptions from 'src/lib/createMapOptions'

import covertZiptoLatLng from '../lib/csvToHeatmapData'

const HeatMap = () => {
  console.log(covertZiptoLatLng())

  const apiKey = { key: 'AIzaSyC3o0VIuxH2LqWAvO9z17usabpJXeimL94' }
  const heatMapData = {
    positions: covertZiptoLatLng(),
    options: {
      radius: 30,
      opacity: 0.6,
    },
  }

  // useEffect(() => {
  //   const point = new google.maps.LatLng(lat, lng);
  //   this._googleMap.heatmap.data.push(point);
  // });

  return (
    <Container>
      <GoogleMapReact
        // ref={(el) => (this._googleMap = el)}
        bootstrapURLKeys={apiKey}
        defaultCenter={{
          lat: 39.891,
          lng: -86.148003,
        }}
        options={createMapOptions}
        defaultZoom={8}
        zoom={8}
        heatmapLibrary={true}
        heatmap={heatMapData}
      ></GoogleMapReact>
    </Container>
  )
}

export default HeatMap

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`
