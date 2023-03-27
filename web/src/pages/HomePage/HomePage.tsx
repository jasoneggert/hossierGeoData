/*global google*/
import { useState, useCallback } from 'react'

import { GoogleMap, HeatmapLayer, LoadScript } from '@react-google-maps/api'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 37.7749,
  lng: -122.4194,
}

function HomePage() {
  const [google, setGoogle] = useState(null)

  const handleLoad = useCallback((map) => {
    setGoogle(window.google)
  }, [])

  console.log(process.env.GOOGLE_MAPS_API_KEY)

  return (
    <LoadScript googleMapsApiKey={'AIzaSyC3o0VIuxH2LqWAvO9z17usabpJXeimL94'}>
      {google && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={handleLoad}
        >
          <HeatmapLayer
            data={[
              {
                location: new google.maps.LatLng(37.782551, -122.445368),
                weight: 10,
              },
              {
                location: new google.maps.LatLng(37.782745, -122.444586),
                weight: 12,
              },
              {
                location: new google.maps.LatLng(37.782842, -122.443688),
                weight: 8,
              },
              {
                location: new google.maps.LatLng(37.782919, -122.442815),
                weight: 14,
              },
              {
                location: new google.maps.LatLng(37.782992, -122.442112),
                weight: 16,
              },
              {
                location: new google.maps.LatLng(37.7831, -122.441461),
                weight: 18,
              },
              {
                location: new google.maps.LatLng(37.783206, -122.440829),
                weight: 20,
              },
              {
                location: new google.maps.LatLng(37.783273, -122.440324),
                weight: 22,
              },
              {
                location: new google.maps.LatLng(37.783316, -122.440023),
                weight: 24,
              },
              {
                location: new google.maps.LatLng(37.783357, -122.439794),
                weight: 26,
              },
              {
                location: new google.maps.LatLng(37.783371, -122.439687),
                weight: 28,
              },
              {
                location: new google.maps.LatLng(37.783368, -122.439666),
                weight: 30,
              },
            ]}
          />
        </GoogleMap>
      )}
    </LoadScript>
  )
}

export default HomePage

// In this example, we use the useState hook to keep track of whether the Google Maps API has loaded. We then define a handleLoad function that uses useCallback to create a memoized callback function that sets the google state variable to the window.google object when the GoogleMap component has loaded.

// The GoogleMap component is only rendered when the google state variable is truthy, which ensures that the HeatmapLayer component is only created after the Google Maps API has loaded.

// Note that you'll need to replace YOUR_API_KEY with your own Google Maps API key.
