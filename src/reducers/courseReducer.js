import { getCourses } from '../lib/courseFakeService'

const initState = {
    courses: [],
    curCourse: {}
}

const COURSES_LOAD = 'COURSES_LOAD'

const loadCourses = (courses) => ({ type: COURSES_LOAD, payload: courses });


export const fetchCourses = () => {
    return (dispatch) => {
        dispatch(loadCourses(getCourses()))
    }
}

export const fetchCourse = (courses, id) => {
    return courses.find(el => el.id === Number(id))
}

export default (state = initState, action) => {
    switch (action.type) {
        case COURSES_LOAD:
            return { ...state, courses: action.payload }
        default:
            return state
    }
}