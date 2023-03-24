import type { ComponentMeta } from '@storybook/react'

import HeatmapPage from './HeatmapPage'

export const generated = () => {
  return <HeatmapPage />
}

export default {
  title: 'Pages/HeatmapPage',
  component: HeatmapPage,
} as ComponentMeta<typeof HeatmapPage>
