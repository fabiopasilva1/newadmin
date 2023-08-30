import { PfImage } from "@profabric/react-components";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo from '../../../assets/img/AdminLTELogo.png'
import avatar from '../../../assets/img/avatar.png'
import avatar2 from '../../../assets/img/avatar2.png'
import MenuItem from "../../../components/menu-item/MenuItem";
import { useEffect, useReducer } from "react";
import { uiReducer } from "../../../store/reducer/uiReducer";
import { SET_SIDEBAR_SKIN } from "../../../store/constants/types";
import { sidebarSkinData } from "../../../store/state/ui";
const StyledBrandImage = styled(PfImage)`
float: left;
line-height: 0.8;
margin: -1px 8px 0 6px;
opacity: 0.8;
--pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
  0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(PfImage)`
--pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

export const MENU = [
  {
    name: 'Dashboard',
    icon: 'fas fa-tachometer-alt nav-icon',
    path: '/'
  },
  {
    name: 'Blank',
    icon: 'fas fa-wrench nav-icon',
    path: '/blank'
  },
  {
    name: 'NavIcon',
    icon: 'far fa-caret-square-down nav-icon',
    children: [
      {
        name: 'Submenu - 1',
        icon: 'fas fa-hammer nav-icon',
        path: '/sub-menu-1'
      },

      {
        name:'Submenu -2',
        icon: 'fas fa-cogs nav-icon',
        path: '/sub-menu-2'
      }
    ]
  }

]
const MenuSidebar = () => {

 
    const [sidebarSkin, dispatch] = useReducer(uiReducer, sidebarSkinData) 

    useEffect(() => {
      if(!sidebarSkin.sidebarSkinData) dispatch({type:SET_SIDEBAR_SKIN, payload:'sidebar-dark-info'})
    },[])
   
  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin.sidebarSkinData}`}>
    <Link to="/" className="brand-link">
      <StyledBrandImage
        src={logo}
        alt="AdminLTE Logo"
        width={33}
        height={33}
        rounded
      />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </Link>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <StyledUserImage
            src={avatar}
            fallbackSrc={avatar2}
            alt="User"
            width={34}
            height={34}
            rounded
          />
        </div>
        <div className="info">
          <Link to="/profile" className="d-block">
            email@example.com
          </Link>
        </div>
      </div>

      <div className="form-inline">
        {/* <SidebarSearch /> */}
      </div>

      <nav className="mt-2" style={{overflowY: 'hidden'}}>
        <ul
          className={`nav nav-pills nav-sidebar flex-column`}
          role="menu"
        >
          {MENU && MENU.map((menuItem) => (
            <MenuItem
              key={menuItem.name + menuItem.path}
              menuItem={menuItem}
            />
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);

}

export default MenuSidebar
