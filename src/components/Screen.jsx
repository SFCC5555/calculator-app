import { useSelector } from "react-redux"
import '../styles/Screen.scss'

const Screen = () => {

  const theme = useSelector(state=>state.theme);
  const display = useSelector(state=>state.display);

  return (
    <div id="display" className={`screen theme-${theme}-screen-background rounded-3 px-4`}>{display}</div>
  )
}

export {Screen}