export default function RouteDetailsReducer (state, action){
    const actionPayload = action.payload;
    switch(action.type) {
        case 'SET_ACTIVE_TAB':
            return {
                ...state,
                activeTab: actionPayload.activeTab
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                query: actionPayload.query
            };
        case 'PII_ONLY':
            return {
                ...state,
                isPIIOnly: actionPayload.isPIIOnly
            };
        case 'RESET_FILTER':
            return {
                ...state,
                isPIIOnly: actionPayload.isPIIOnly,
                query: actionPayload.query
            };

        default:
            return state;
    }
}
