import { useSelector } from "react-redux"
import '../styles/Screen.scss'

const Screen = () => {

  const theme = useSelector(state=>state.theme);

  return (
    <div className={`screen theme-${theme}-screen-background d-flex align-items-center justify-content-end rounded-3 px-4 fs-1`} >5555</div>
  )
}

export {Screen}