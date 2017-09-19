import reducer from './testreducer'

describe('Testing test reducer', () => {

    test('test TEST_ACTION', () => {

        const startState = {}
        const endState = { testAction: 'test' }

        const action = { type: 'TEST_ACTION', payload: 'test' }
        const result = reducer(startState, action)

        expect(result).toEqual(endState)

    })

})