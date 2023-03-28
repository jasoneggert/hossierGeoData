import type { ComponentMeta } from '@storybook/react'

import MarkerMapPage from './MarkerMapPage'

export const generated = () => {
  return <MarkerMapPage />
}

export default {
  title: 'Pages/MarkerMapPage',
  component: MarkerMapPage,
} as ComponentMeta<typeof MarkerMapPage>
