import reducer from './courseReducer'

describe('Testing course reducer', () => {
    test.skip('test COURSE_ADD action', () => {
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

    test.skip('test COURSE_EDIT action', () => {
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

    test.skip('test COURSES_TOP5', () => {
        const startState = {
            courses: [
                { creationDate: 3, lastUpdateDate: 3, rating: 3 },
                { creationDate: 1, lastUpdateDate: 1, rating: 1 },
                { creationDate: 43, lastUpdateDate: 43, rating: 43 },
                { creationDate: 643, lastUpdateDate: 643, rating: 28 },
                { creationDate: 23, lastUpdateDate: 23, rating: 23 },
                { creationDate: 13, lastUpdateDate: 13, rating: 13 },
                { creationDate: 33, lastUpdateDate: 33, rating: 33 },
                { creationDate: 53, lastUpdateDate: 53, rating: 53 }
            ],
            coursesNewest: [],
            coursesUpdated: [],
            coursesMostRating: []
        }

        const endState = {
            courses: [
                { creationDate: 3, lastUpdateDate: 3, rating: 3 },
                { creationDate: 1, lastUpdateDate: 1, rating: 1 },
                { creationDate: 43, lastUpdateDate: 43, rating: 43 },
                { creationDate: 643, lastUpdateDate: 643, rating: 28 },
                { creationDate: 23, lastUpdateDate: 23, rating: 23 },
                { creationDate: 13, lastUpdateDate: 13, rating: 13 },
                { creationDate: 33, lastUpdateDate: 33, rating: 33 },
                { creationDate: 53, lastUpdateDate: 53, rating: 53 }
            ],
            coursesNewest: [
                { creationDate: 643, lastUpdateDate: 643, rating: 28 },
                { creationDate: 53, lastUpdateDate: 53, rating: 53 },
                { creationDate: 43, lastUpdateDate: 43, rating: 43 },
                { creationDate: 33, lastUpdateDate: 33, rating: 33 },
                { creationDate: 23, lastUpdateDate: 23, rating: 23 }
            ],
            coursesUpdated: [
                { creationDate: 643, lastUpdateDate: 643, rating: 28 },
                { creationDate: 53, lastUpdateDate: 53, rating: 53 },
                { creationDate: 43, lastUpdateDate: 43, rating: 43 },
                { creationDate: 33, lastUpdateDate: 33, rating: 33 },
                { creationDate: 23, lastUpdateDate: 23, rating: 23 }
            ],
            coursesMostRating: [
                { creationDate: 53, lastUpdateDate: 53, rating: 53 },
                { creationDate: 43, lastUpdateDate: 43, rating: 43 },
                { creationDate: 33, lastUpdateDate: 33, rating: 33 },
                { creationDate: 643, lastUpdateDate: 643, rating: 28 },
                { creationDate: 23, lastUpdateDate: 23, rating: 23 }
            ]
        }

        const action = { type: 'COURSES_TOP5' }
        const result = reducer(startState, action)
        expect(result).toEqual(endState)

    })

    test.skip('test default action', () => {
        const startState = {
            courses: []
        }
        const endState = {
            courses: []
        }
        const action = { type: 'COURSES_CHECK_EMPTY' }
        const result = reducer(startState, action)
        expect(result).toEqual(endState)

    })

    test('test COURSE_TOGGLE', () => {
        const startState = {
            courses: [
                {
                    "category": "hh",
                    "creationDate": 1510412851663,
                    "description": "hh",
                    "id": 2,
                    "invisible": false,
                    "language": "BG",
                    "lastUpdateDate": 1511025445918,
                    "name": "hhzdhhhhhh",
                    "teacherEmail": "hh",
                    "teacherName": "hh"
                },
                {
                    "category": "hh",
                    "creationDate": 1510412851663,
                    "description": "hh",
                    "id": 3,
                    "invisible": false,
                    "language": "BG",
                    "lastUpdateDate": 1511025445918,
                    "name": "hhzdhhhhhh",
                    "teacherEmail": "hh",
                    "teacherName": "hh"
                }
            ]
        }
        const endState = {
            courses: [
                {
                    "category": "hh",
                    "creationDate": 1510412851663,
                    "description": "hh",
                    "id": 2,
                    "invisible": false,
                    "language": "BG",
                    "lastUpdateDate": 1511025445918,
                    "name": "hhzdhhhhhh",
                    "teacherEmail": "hh",
                    "teacherName": "hh"
                },
                {
                    "category": "hh",
                    "creationDate": 1510412851663,
                    "description": "hh",
                    "id": 3,
                    "invisible": true,
                    "language": "BG",
                    "lastUpdateDate": 1511025445918,
                    "name": "hhzdhhhhhh",
                    "teacherEmail": "hh",
                    "teacherName": "hh"
                }
            ]
        }

        const action = { type: 'COURSE_TOGGLE', payload: 3 }
        const result = reducer(startState, action)
        expect(result).toEqual(endState)

    })

})