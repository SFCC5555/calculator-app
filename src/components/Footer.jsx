import { useSelector } from 'react-redux';
import '../styles/Footer.scss'

const Footer = () => {

  const theme = useSelector(state=>state.theme);

  return (
    <div className={`mt-3 fs-6 theme-${theme}-main-background`} >Challenge by <a className={`hover-full-opacity theme-${theme}-main-background`}  href='https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator' target="_blank" rel="noreferrer">freeCodeCamp</a></div>
  )
}

export { Footer };