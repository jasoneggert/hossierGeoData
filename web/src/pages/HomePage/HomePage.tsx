import { GoogleMap, HeatmapLayer, useLoadScript } from '@react-google-maps/api'

import covertZiptoLatLng from 'src/lib/convertZipToLatLng'
import createMapOptions from 'src/lib/createMapOptions'
const containerStyle = {
  width: '100%',
  height: '100%',
}

const center = {
  lat: 39.891,
  lng: -86.148003,
}

const handleLoad = () => {
  console.log('load')
}

function HomePage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries: ['visualization'],
  })

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }
  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onLoad={handleLoad}
        options={createMapOptions()}
      >
        <HeatmapLayer
          data={covertZiptoLatLng()}
          options={{
            radius: 20,
            opacity: 0.6,
          }}
        />
      </GoogleMap>
    )
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }
}

export default HomePage
