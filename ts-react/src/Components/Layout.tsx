import React from 'react'
import useWindowHeight from './useWindowHeight'

function Layout() {

    const smallScreen = useWindowHeight();
  return (
    <div>
      {smallScreen ? 'small' : 'large'}
    </div>
  )
}

export default Layout
