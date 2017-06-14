// Constants
const TOGGLE_SIDEPANEL = 'TOGGLE_SIDEPANEL';

// Actions
export function toggleSidePanel() {
    return {type: TOGGLE_SIDEPANEL};
}

// Reducer
const initialState = {
    panelIsOpen: false
};

export function appHeaderReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDEPANEL:
            const newState = {panelIsOpen: !state.panelIsOpen};
            return {...state, ...newState};
        default:
            return state;
    }
}
