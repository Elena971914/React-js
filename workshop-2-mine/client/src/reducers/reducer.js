export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_COMMENTS':
            return [...action.value]
        case 'ADD_NEW_COMMENT':
            return [...state, action.value]
        default:
            return state
}}