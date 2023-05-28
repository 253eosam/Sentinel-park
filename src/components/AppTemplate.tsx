import React from "react"
import AppHeader from "./AppHeader"
import AppContainer from "./AppContainer"
import AlarmBox from "./alarm/AlarmBox"

const AppTemplate: React.FC<any> = () => {
  const cardNum = 20
  return (
    <>
      <AppHeader></AppHeader>
      <AppContainer>
        {Array.from(Array(cardNum), (_, i) => i).map((item: any) => (
          <AlarmBox key={`${item}`} item={item} />
        ))}
      </AppContainer>
    </>
  )
}

export default AppTemplate
