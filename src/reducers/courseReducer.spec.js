import reducer from './courseReducer'

describe('Testing course reducer', () => {
    test('test COURSE_ADD action', () => {
        const startState = { courses: [] }
        const endState = {
            courses: [
                { id: 5, name: 'Ivan', description: 'desc' }]
        }
        const action = { type: 'COURSE_ADD', payload: { id: 5, name: 'Ivan', description: 'desc' } }
        const result = reducer(startState, action)
        expect(result).toEqual(endState)
    })

})