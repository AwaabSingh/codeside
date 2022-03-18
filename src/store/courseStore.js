import { writable } from 'svelte/store'

import axios from 'axios'

export const courses = writable([])
// export const getCoursesbyCat = writable([])

const API_URL = 'https://aqueous-beyond-13704.herokuapp.com/';

// get courses
 export const getAllCourses = async () => {

     try {

         const response = await axios.get(API_URL + 'allcourse')

         return response.data
     } catch (error) {
           console.log(error)
     }
}
// getAllCourses()

// get courses by category 
// export const getCoursesByCategory = async () => {
//      try { 
//          const response = await axios.get(API_URL + 'getcourse')

//          getCoursesbyCat.set(response.data)
//      } catch (error) {
//          console.log(error)
//      }
// }
// getCoursesByCategory()

// create course  by instructor 
//  export const createCourse = async (courseData, userToken) => {
//       try{
//            const config = {
//                headers: {
//                    'Authorization': `bearer ${userToken}`
//                }
//            }
//       } catch(error) {

//       }
//  }


// publish course 
export const publlishCourse = async (courseId, userToken) => {
      try {
          const config = {
              headers: {
                'Content-Type': 'application/json',
                   'Authorization': `bearer ${userToken}`
              }
          }

          const response = await axios.put(API_URL + `publishCourse/${courseId}`, config)

          return response.data
      } catch (error) {
          console.log(error)
      }
}