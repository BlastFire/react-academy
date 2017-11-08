//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = (firebase) => {
    return firebase.ref('courses').once('value')
}

export const getConfigLanguageData = (firebase) => {
    return firebase.ref('configLanguageData').once('value')
}

export const addCourse = ({ firebase, course, action }) => {
    //FILE BASE64 ENCODE so we can store it in the object (TODO: diff approach, when we are going to store them into a remote storage)
    if (course.image) {
        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            course.image = reader.result
            firebase.push('courses', course)
            action(finishAddCourseSetup(course))
        }, false)

    } else {
        firebase.push('courses', course)
        action(finishAddCourseSetup(course))
    }
}

export const editCourse = ({ firebase, course, action }) => {

    if (course.image && course.image.constructor === 'array') {
        const reader = new FileReader();
        reader.readAsDataURL(course.image[0])

        //when done loading image
        reader.addEventListener("load", function () {
            course.image = reader.result
            //firebase.update('courses', course)
            action(finishEditCourseSetup(course))
        }, false)
    } else {
        //firebase.update('courses', course)
        action(finishEditCourseSetup(course))
    }
}

const finishAddCourseSetup = (course) => {
    course.creationDate = new Date().getTime()
    course.lastUpdateDate = course.creationDate
    course.invisible = course.invisible ? true : false
    return course
}

const finishEditCourseSetup = (course) => {
    course.lastUpdateDate = Date.now()
    course.invisible = course.invisible ? true : false
    return course
}

//Not needed anymore
//hoisted, just example
//let counter = courseIdCounter()
// function courseIdCounter() {
//     let counter = 2
//     return {
//         incrementCounter() {
//             return ++counter
//         },
//         decrementCounter() {
//             return --counter
//         },
//         value() {
//             return counter
//         }
//     }
// }

