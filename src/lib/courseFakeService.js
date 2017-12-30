export const getCourses = (firebase) => {
    return firebase.ref('courses').once('value')
}

export const getConfigLanguageData = (firebase) => {
    return firebase.ref('configLanguageData').once('value')
}