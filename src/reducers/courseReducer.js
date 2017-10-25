import { getCourses, getConfigLanguageData } from '../lib/courseFakeService'

const initState = {
    courses: [],
    configCourse: {
        languages: []
    }
}

const COURSES_LOAD = 'COURSES_LOAD'
const CONFIG_LANGUAGE_LOAD = 'CONFIG_LANGUAGE_LOAD'
const COURSE_ADD = 'COURSE_ADD'
const DELETE_COURSE = 'DELETE_COURSE'

const loadCoursesA = courses => ({ type: COURSES_LOAD, payload: courses });
const loadConfigLanguagesA = langs => ({ type: CONFIG_LANGUAGE_LOAD, payload: langs })
export const addCourseA = course => ({ type: COURSE_ADD, payload: course })
export const deleteCourseA = id => ({ type: DELETE_COURSE, payload: id })

//thunk
export const fetchCourses = () => dispatch => dispatch(loadCoursesA(getCourses()))
export const fetchConfigLanguages = () => dispatch => dispatch(loadConfigLanguagesA(getConfigLanguageData()))

export const fetchCourse = (courses, id) => courses.find(el => el.id === Number(id))

export default (state = initState, action) => {
    switch (action.type) {
        case COURSES_LOAD:
            return { ...state, courses: action.payload }
        case COURSE_ADD:
            return { ...state, courses: [...state.courses, { ...action.payload }] }
        case DELETE_COURSE:
            return { ...state, courses: [...state.courses.filter((item) => item.id !== action.payload)] }
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