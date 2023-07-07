import { useSelector } from "react-redux"
import data from '../data.json'
import '../styles/Keypad.scss'
import { changeDisplay } from "../redux/displaySlice"
import { useDispatch } from "react-redux"

const Keypad = () => {

  const theme = useSelector(state=>state.theme);
  let display = useSelector(state=>state.display);

  const dispatch = useDispatch();

  function handleClick(e) {
    const key = e.target.innerText;
    display = display.toString()
    let newDisplay = display;
  
    if (key === "RESET") {
      newDisplay = "0";
    } else if (key === "DEL") {
      if (display==='Infinity') {
        newDisplay = "0";
      } else {
        newDisplay = display.length === 1 ? "0" : display.slice(0, display.length - 1);
      }

    } else if (key === "=") {

      newDisplay = display.replaceAll('x','*');

      newDisplay=parseFloat(eval(newDisplay).toFixed(10));

    }


    else if ('+/x'.includes(key)) {
      if ('.+/x-'.includes(display[display.length-1])) {
        
        if ('.+/x-'.includes(display[display.length-2])&&display[display.length-1]==='-') {
          newDisplay=display.slice(0,display.length-2)+key;
        } else {
          newDisplay=display.slice(0,display.length-1)+key;
        }
        
      } else {
        newDisplay=display+key;
      }
    } else if (key==='-') {
      if ('.+/x-'.includes(display[display.length-2])&&display[display.length-1]==='-') {
        newDisplay=display;
      } else {
        newDisplay=display+key;
      }
    } else if (key==='.') {

        const operatorLastindex = Math.max(display.lastIndexOf('+'),
                                          display.lastIndexOf('x'),
                                          display.lastIndexOf('/'),
                                          display.lastIndexOf('-'));

       const lastSlice = operatorLastindex===-1?display:display.slice(operatorLastindex+1);                                   

        if (display[display.length-1]==='.') {
          newDisplay=display
        } else if ('.+/x-'.includes(display[display.length-1])) {
          newDisplay=display+'.0'
        } else if (lastSlice.includes('.')) {
          newDisplay=display
        }else {
          newDisplay=display+key;
        }
    } else {
      newDisplay=display==='0'?key:display+key;
    }
  
    dispatch(changeDisplay(newDisplay));
  }
  

  return (
    <section className={`keypad rounded-3 w-100 theme-${theme}-keypad-background`}>
      {data.map(k=><button onClick={handleClick} id={k.id} className={`${k.name==='DEL'||k.name==='RESET'?'fs-6':'fs-2'} rounded-3 theme-${theme}-key-${k.color} `} key={k.name}>{k.name}</button>)}
    </section>
  )
}

export {Keypad}