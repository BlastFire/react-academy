import { courseData, configLanguageData } from '../datastorage/storage'

//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = () => courseData
export const getConfigLanguageData = () => configLanguageData
let counter = courseIdCounter()

export const addCourse = ({ firebase, course, action }) => {
    //FILE BASE64 ENCODE so we can store it in the object (TODO: diff approach, when we are going to store them into a remote storage)
    if (course.image) {
        console.log(course.image)
        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            console.log("if read")
            course.image = reader.result
            firebase.push('courses', course)
            action(finishAddCourseSetup(course))
        }, false)

    } else {
        firebase.push('courses', course)
        action(finishAddCourseSetup(course))
    }
}

export const editCourse = ({ type, payload: { action, source: course } }) => {

    if (course.image && course.image.constructor === 'array') {
        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            course.image = reader.result
            action(finishEditCourseSetup(course))
        }, false)
    } else {
        action(finishEditCourseSetup(course))
    }
}

const finishAddCourseSetup = (course) => {
    course.creationDate = new Date().getTime()
    course.lastUpdateDate = course.creationDate
    course.id = counter.incrementCounter()
    course.invisible = course.invisible ? true : false
    return course
}

const finishEditCourseSetup = (course) => {
    course.lastUpdateDate = Date.now()
    course.invisible = course.invisible ? true : false
    return course
}

//hoisted, just example
function courseIdCounter() {
    let counter = 2
    return {
        incrementCounter() {
            return ++counter
        },
        decrementCounter() {
            return --counter
        },
        value() {
            return counter
        }
    }
}


// export const getCourse = (id) => {
//     return storage.find(el => el.id === Number(id))
// }