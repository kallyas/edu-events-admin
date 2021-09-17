

const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                ...state,
                events: [state.events, ...action.payload]
            }

        default:
            return state;
    }
}

export default appReducer