import { courseData, configLanguageData } from '../datastorage/storage'

export const getCourses = () => courseData
export const getConfigLanguageData = () => configLanguageData


// export const getCourse = (id) => {
//     return storage.find(el => el.id === Number(id))
// }