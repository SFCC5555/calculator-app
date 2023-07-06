import '../styles/Switch.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../redux/themeSlice';

const Switch = () => {

  const dispatch = useDispatch();

  const theme = useSelector(state=>state.theme);

  function handleChange(e) {
    dispatch(changeTheme(e.target.value))
  }

  return (
    <div className='d-flex gap-5' >
        <p className='translate-y-100' >THEME</p>
        <div className='d-flex flex-column align-items-center'>
          <p className='m-0 d-flex align-items-center px-1 w-100 justify-content-between' ><div>1</div><div>2</div><div>3</div></p>
          <input type="range" value={theme} onChange={handleChange} id="switch" min="1" max="3" step="1" className={`switch theme-${theme}-switch`} />
        </div>

    </div>
  )
}

export {Switch}