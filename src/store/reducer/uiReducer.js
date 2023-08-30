import * as types from "../constants/types"

export const uiReducer = (state, action) => {
    switch (action.type){
        case types.TOGGLE_SIDEBAR_MENU: {
            return {...state, menuSidebarCollapsed: action.payload}
        }

        case types.SET_SIDEBAR_SKIN:{
            return {...state, sidebarSkinData:action.payload}
        }
       case types.TOGGLE_MENU_CHILD_INDENT: {
        return {...state, menuChildIndentData: action.payload}
       }
    }
     
    return {...state}
}
