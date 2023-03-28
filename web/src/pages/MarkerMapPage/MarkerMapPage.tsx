import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MarkerMapPage = () => {
  return (
    <>
      <MetaTags title="MarkerMap" description="MarkerMap page" />

      <h1>MarkerMapPage</h1>
      <p>
        Find me in <code>./web/src/pages/MarkerMapPage/MarkerMapPage.tsx</code>
      </p>
      <p>
        My default route is named <code>markerMap</code>, link to me with `
        <Link to={routes.markerMap()}>MarkerMap</Link>`
      </p>
    </>
  )
}

export default MarkerMapPage
