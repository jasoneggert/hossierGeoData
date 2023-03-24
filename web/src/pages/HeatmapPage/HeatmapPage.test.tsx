import { render } from '@redwoodjs/testing/web'

import HeatmapPage from './HeatmapPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HeatmapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeatmapPage />)
    }).not.toThrow()
  })
})
