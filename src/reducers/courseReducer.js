import { getCourses, getConfigLanguageData } from '../lib/courseFakeService'

const initState = {
    courses: [],
    curCourse: {},
    configCourse: {
        languages: []
    }
}

const COURSES_LOAD = 'COURSES_LOAD'
const CONFIG_LANGUAGE_LOAD = 'CONFIG_LANGUAGE_LOAD'

const loadCourses = courses => ({ type: COURSES_LOAD, payload: courses });
const loadConfigLanguages = langs => ({ type: CONFIG_LANGUAGE_LOAD, payload: langs })

//thunk
export const fetchCourses = () => dispatch => dispatch(loadCourses(getCourses()))
export const fetchConfigLanguages = () => dispatch => dispatch(loadConfigLanguages(getConfigLanguageData()))


export const fetchCourse = (courses, id) => {
    return courses.find(el => el.id === Number(id))
}

export default (state = initState, action) => {
    switch (action.type) {
        case COURSES_LOAD:
            return { ...state, courses: action.payload }
        case CONFIG_LANGUAGE_LOAD:
            return {
                ...state, configCourse: {
                    languages: [...action.payload]
                }
            }
        default:
            return state
    }
}