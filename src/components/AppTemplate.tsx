import React from 'react'
import AppHeader from './AppHeader'
import AppContainer from './AppContainer'
import Listing from './list/Listing'
import TemporarySwipeableDrawer from './drawer/TemporarySwipeableDrawer'

const AppTemplate: React.FC<any> = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <AppContainer>
        <Listing></Listing>
        <TemporarySwipeableDrawer></TemporarySwipeableDrawer>
      </AppContainer>
    </>
  )
}

export default AppTemplate
