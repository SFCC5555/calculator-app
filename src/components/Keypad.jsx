import { useSelector } from "react-redux"
import data from '../data.json'
import '../styles/Keypad.scss'

const Keypad = () => {

  const theme = useSelector(state=>state.theme);

  return (
    <section className={`keypad rounded-3 w-100 theme-${theme}-keypad-background`}>
      {data.map(k=><button className={`${k.name==='DEL'||k.name==='RESET'?'fs-6':'fs-2'} rounded-3 theme-${theme}-key-${k.color} `} key={k.name}>{k.name}</button>)}
    </section>
  )
}

export {Keypad}