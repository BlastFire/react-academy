import { courseData, configLanguageData } from '../datastorage/storage'

//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = () => courseData
export const getConfigLanguageData = () => configLanguageData
let counter = courseIdCounter()

export const addCourse = (course, action) => {
    //FILE BASE64 ENCODE so we can store it in the object (TODO: diff approach, when we are going to store them into a remote storage)
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        console.log("listener")
        course.creationDate = new Date().getTime()
        course.lastUpdateDate = course.creationDate
        course.id = counter.incrementCounter()
        course.image = reader.result
        action(course)
    }, false)
    if (course.image[0]) {
        reader.readAsDataURL(course.image[0])
    }
}
//hoisted
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