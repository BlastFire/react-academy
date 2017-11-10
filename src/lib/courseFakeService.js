//moment(value).format('YYYY-MM-DD HH:mm');

export const getCourses = (firebase) => {
    return firebase.ref('courses').once('value')
}

export const getConfigLanguageData = (firebase) => {
    return firebase.ref('configLanguageData').once('value')
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

