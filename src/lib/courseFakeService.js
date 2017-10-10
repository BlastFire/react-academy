import { courseData, configLanguageData } from '../datastorage/storage'

//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = () => courseData
export const getConfigLanguageData = () => configLanguageData
let counter = courseIdCounter()

export const addCourse = (course, action) => {
    course.creationDate = new Date().getTime()
    course.lastUpdateDate = course.creationDate
    course.id = counter.incrementCounter()
    handleFileExtract(course);
    action(course)
    console.log(course)
}

function handleFileExtract(course) {
    //FILE BASE64 ENCODE so we can store it in the object (TODO: diff approach, when we are going to store them into a remote storage)
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        course.image = reader.result;
    }, false);
    if (course.image[0]) {
        reader.readAsDataURL(course.image[0]);
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