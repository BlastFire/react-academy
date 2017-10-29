import reducer from './courseReducer'

describe('Testing course reducer', () => {
    test('test COURSE_ADD action', () => {
        const startState = { courses: [] }
        const endState = {
            courses: [
                { id: 5, name: 'Ivan', description: 'desc' }
            ]
        }
        const action = { type: 'COURSE_ADD', payload: { id: 5, name: 'Ivan', description: 'desc' } }
        const result = reducer(startState, action)
        expect(result).toEqual(endState)
    })

    test('test COURSE_EDIT action', () => {
        const startState = {
            courses: [
                { id: 5, name: 'Ivan', description: 'desc' },
                { id: 6, name: 'Ivan', description: 'desc' },
                { id: 7, name: 'Ivan', description: 'desc' }
            ]
        }
        const endState = {
            courses: [
                { id: 5, name: 'GOGO', description: 'desc2' },
                { id: 6, name: 'Ivan', description: 'desc' },
                { id: 7, name: 'Ivan', description: 'desc' }
            ]
        }

        const action = { type: 'COURSE_EDIT', payload: { id: 5, name: 'GOGO', description: 'desc2' } }
        const result = reducer(startState, action)
        expect(result).toEqual(endState)
    })

})