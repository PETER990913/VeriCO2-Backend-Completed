
let initState = {
    tabId : 0
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TAB': {
            return {
                ...state,
                tabId: action.payload.id
            }
        }
        default: return state
    }

}

export default reducer;