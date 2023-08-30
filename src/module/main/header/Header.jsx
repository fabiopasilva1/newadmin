import  { useCallback, useEffect, useReducer } from 'react'
import { uiReducer } from '../../../store/reducer/uiReducer'
import { menuSidebarCollapsed } from '../../../store/state/ui'
import { TOGGLE_SIDEBAR_MENU } from '../../../store/constants/types'
import { Link } from 'react-router-dom'
import UserDropdown from './user-dropdown'
import P from 'prop-types'

const Header = (props) => {
const [toggleMenu, dispatch] = useReducer(uiReducer, menuSidebarCollapsed)

const handleToggleMenuSidebar = () => {
  dispatch({type: TOGGLE_SIDEBAR_MENU, payload:!toggleMenu.menuSidebarCollapsed})
}
  const navbarVariant = 'navbar-light'
  const headerBorder = false
  const getContainerClass = useCallback(() => {

    let classes = `main-header navbar navbar-expand ${navbarVariant}`;
    if(headerBorder){
      classes = `${classes} border-bottom-0`
    }
    return classes
  },[navbarVariant, headerBorder])
  useEffect(() => {
    props.setMenuCollapsed(toggleMenu.menuSidebarCollapsed)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[toggleMenu])
  return (
   <nav className={getContainerClass()}>
    <ul className="navbar-nav">
      <li className="nav-item">
        <button type='button' onClick={handleToggleMenuSidebar}
        className='nav-link'>
          <i className="fas fa-bars"></i>
        </button>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Contato
          </Link>
        </li>
     
    </ul>
    <ul className='navbar-nav ml-auto'>
     <UserDropdown />
    </ul>
   </nav>
  )
}

export default Header
Header.propTypes = {
  setMenuCollapsed: P.func
}
