import React from 'react'
import AppHeader from './AppHeader'
import AppContainer from './AppContainer'
import Listing from './list/Listing'

const AppTemplate: React.FC<any> = () => {

  return (
    <>
      <AppHeader></AppHeader>
      <AppContainer>
        <Listing></Listing>
      </AppContainer>
    </>
  )
}

export default AppTemplate
