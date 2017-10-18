import { courseData, configLanguageData } from '../datastorage/storage'

//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = () => courseData
export const getConfigLanguageData = () => configLanguageData
let counter = courseIdCounter()

export const addCourse = (course, action) => {
    //FILE BASE64 ENCODE so we can store it in the object (TODO: diff approach, when we are going to store them into a remote storage)
    if (course.image) {
        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            course.image = reader.result
            action(finishCourseSetup(course))
        }, false)

    } else {
        action(finishCourseSetup(course))
    }

}

const finishCourseSetup = (course) => {
    course.creationDate = new Date().getTime()
    course.lastUpdateDate = course.creationDate
    course.id = counter.incrementCounter()
    if (course.visible) {
        course.visible = false
    } else {
        course.visible = true
    }
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