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
const COURSE_EDIT = 'COURSE_EDIT'

const loadCoursesA = courses => ({ type: COURSES_LOAD, payload: courses })
const loadConfigLanguagesA = langs => ({ type: CONFIG_LANGUAGE_LOAD, payload: langs })
const addCourseA = course => ({ type: COURSE_ADD, payload: course })
const deleteCourseA = id => ({ type: DELETE_COURSE, payload: id })
const editCourseA = course => ({ type: COURSE_EDIT, payload: course })

//thunk
export const addCourse = ({ firebase, course, redirectCb }) => dispatch => {
    //FILE BASE64 ENCODE so we can store it in the object (TODO: diff approach, when we are going to store them into a remote storage)
    const imageType = /^image\//;

    if (course.image && course.image.length !== 0 && imageType.test(course.image[0].type)) {

        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            course.image = reader.result
            course.creationDate = new Date().getTime()
            course.lastUpdateDate = course.creationDate
            course.invisible = course.invisible ? true : false
            //push to firebase
            var fireRef = firebase.push('courses', course)
            course.id = fireRef.key

            //update store
            dispatch(addCourseA(course))
            redirectCb()
        }, false)

    } else {
        delete course.image
        course.creationDate = new Date().getTime()
        course.lastUpdateDate = course.creationDate
        course.invisible = course.invisible ? true : false
        //push to firebase
        var fireRef = firebase.push('courses', course)
        course.id = fireRef.key

        //update store
        dispatch(addCourseA(course))
        redirectCb()
    }
}

export const editCourse = ({ firebase, course, redirectCb }) => dispatch => {

    //cleaning some helper properties
    delete course.langValue

    const imageType = /^image\//;

    if (course.image && course.image.length !== 0 && imageType.test(course.image[0].type)) {

        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            course.image = reader.result
            course.lastUpdateDate = Date.now()
            course.invisible = course.invisible ? true : false

            let updates = {}
            updates['/courses/' + course.id] = course

            firebase.database().ref().update(updates).then(response => {
                dispatch(editCourseA(course))
                redirectCb()
            }, error => { console.log(`Update course error: ${error}`) })

        }, false)
    } else {
        delete course.image
        course.lastUpdateDate = Date.now()
        course.invisible = course.invisible ? true : false

        let updates = {}
        updates['/courses/' + course.id] = course

        firebase.database().ref().update(updates).then(response => {
            dispatch(editCourseA(course))
            redirectCb()
        }, error => { console.log(`Update course error: ${error}`) })
    }
}

export const deleteCourse = ({ firebase, id, redirectCb }) => dispatch => {
    let updates = {}
    updates['/courses/' + id] = null

    firebase.database().ref().update(updates).then(response => {
        dispatch(deleteCourseA(id))
        redirectCb()
    }, error => { console.log(`Update course error: ${error}`) })

}

export const fetchConfigLanguages = firebase => (dispatch, getState) => {

    const { crs: { configCourse: { languages } } } = getState()

    if (languages.length <= 0) {
        getConfigLanguageData(firebase).then(snapshot => {
            const langs = []
            snapshot.forEach(userSnapShot => {
                langs.push({ code: userSnapShot.key, value: userSnapShot.val() })
            })
            dispatch(loadConfigLanguagesA(langs))
        })
    }
}

export const fetchCourses = firebase => dispatch => {
    getCourses(firebase).then(snapshot => {
        const courses = []
        snapshot.forEach(userSnapShot => {
            courses.push({ ...userSnapShot.val(), id: userSnapShot.key })
        })
        dispatch(loadCoursesA(courses))
    })
}

//TODO: move it from reducer
export const fetchCourse = (courses, id) => courses.find(el => el.id === id)

//THE REDUCER FUNCTION
export default (state = initState, action) => {
    switch (action.type) {
        case COURSES_LOAD:
            return { ...state, courses: action.payload }
        case COURSE_ADD:
            return { ...state, courses: [...state.courses, { ...action.payload }] }
        case DELETE_COURSE:
            return { ...state, courses: [...state.courses.filter((item) => item.id !== action.payload)] }
        case COURSE_EDIT:
            return {
                ...state, courses: [...state.courses.map((item) => {
                    if (item.id === action.payload.id) {
                        const eItem = action.payload
                        return eItem
                    }
                    return item
                })]
            }
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