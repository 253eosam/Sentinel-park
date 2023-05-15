import { drawerAtom, drawerComponentAtom } from "@src/components/drawer/TemporarySwipeableDrawer"
import { atom, useRecoilState } from "recoil"

const useBottomSwiperDrawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useRecoilState(drawerAtom)
  const [drawerComponent, setDrawerComponent] = useRecoilState(drawerComponentAtom)

  return {
    isOpenDrawer,
    drawerComponent,
    openDrawer: (compo?: React.ReactHTMLElement<HTMLElement>) => {
      setIsOpenDrawer(true)
      setDrawerComponent(compo as any)
    },
    offDrawer: () => {
      setIsOpenDrawer(false)
      setDrawerComponent(null)
    },
  }
}

export default useBottomSwiperDrawer
