import { RESET, RESTORE } from 'app/App.actions'

export interface LoginDrawerState {
    showingMenu: boolean
}
  
const loginDrawerDefaultState: LoginDrawerState = {
    showingMenu: false,
}

export function loginDrawer(state = loginDrawerDefaultState, action: any): LoginDrawerState {
    switch (action.type) {
        case RESET: {
            return loginDrawerDefaultState
        }
        case RESTORE: {
            return loginDrawerDefaultState
        }
        default:
            return state
    }
}
