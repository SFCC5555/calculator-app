import { Switch } from "./components/Switch"
import { Screen } from "./components/Screen"
import { Keypad } from "./components/Keypad"
import { useSelector } from "react-redux";

function App() {

  const theme = useSelector(state=>state.theme);

  return (
    <div className={`container-fluid h-100 p-4 d-flex align-items-center justify-content-center theme-${theme}-main-background`}>
      <section className="d-flex flex-column align-items-center calculator gap-3" >
        <div className="d-flex align-items-center justify-content-between w-100" >
          <h1>calc</h1>
          <Switch />
        </div>
        <main className="d-flex w-100 flex-column align-items-center gap-3" >
          <Screen />
          <Keypad />
        </main>
      </section>  
    </div>

  )
}

export default App
