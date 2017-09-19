
const initState = {
    testAction: ''
}

const TEST_ACTION = 'TEST_ACTION'

export default (state = initState, action) => {

    switch (action.type) {
        case TEST_ACTION:
            return { ...state, testAction: action.payload }
        default:
            return state
    }

}