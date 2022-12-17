import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  SHOW_SIDEBAR,
  TOGGLE_LEFTMENU,
} from "./actionTypes"

export const changeLayout = layout => ({
  type: CHANGE_LAYOUT,
  payload: layout,
})

export const changeLayoutWidth = width => ({
  type: CHANGE_LAYOUT_WIDTH,
  payload: width,
})

export const changeSidebarTheme = theme => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: theme,
})

export const changeSidebarType = (sidebarType, isMobile) => {
  return {
    type: CHANGE_SIDEBAR_TYPE,
    payload: { sidebarType, isMobile },
  }
}

export const changeTopbarTheme = topbarTheme => ({
  type: CHANGE_TOPBAR_THEME,
  payload: topbarTheme,
})

export const showRightSidebarAction = isopen => ({
  type: SHOW_RIGHT_SIDEBAR,
  payload: isopen,
})

export const showSidebar = isopen => ({
  type: SHOW_SIDEBAR,
  payload: isopen,
})

export const toggleLeftmenu = isopen => ({
  type: TOGGLE_LEFTMENU,
  payload: isopen,
})
