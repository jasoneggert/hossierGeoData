import { render } from '@redwoodjs/testing/web'

import MarkerMapPage from './MarkerMapPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarkerMapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarkerMapPage />)
    }).not.toThrow()
  })
})
