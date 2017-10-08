import { courseData, configLanguageData } from '../datastorage/storage'

//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = () => courseData
export const getConfigLanguageData = () => configLanguageData
let counter = courseIdCounter()

export const addCourse = (course) => {
    course.creationDate = new Date().getTime()
    course.lastUpdateDate = course.creationDate
    course.id = counter.incrementCounter()
    if (course.image) course.image = course.image[0].name
    courseData.push(course)
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