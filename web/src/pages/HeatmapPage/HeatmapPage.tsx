import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HeatMap from 'src/components/Heatmap'

const HeatmapPage = () => {
  return (
    <>
      <MetaTags title="Heatmap" description="Heatmap page" />
      <HeatMap />
    </>
  )
}

export default HeatmapPage
