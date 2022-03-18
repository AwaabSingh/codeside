// import {  userData } from '$lib/store'
import axios from "axios";
// export const user = writable(null)
// import { onMount } from "svelte";

// export const user = writable(false)






const API_URL = 'https://aqueous-beyond-13704.herokuapp.com/';

// register user 
export const registerUser = async (userData) => {
     try {
         const response = await axios.post(API_URL + 'signup', userData);
         if(response.data) {
            // userData('user', response.data.detail);
         }

         return response.data;
     } catch (error) {
         console.log(error)
     }
}

// Login user
export const loginUser = async (userData) => {
    try{
        const config = {
             headers: {
                 'content-type': 'application/json'
             }
        }

        const response = await axios.post(API_URL + 'signin', userData, config)

        if (response.data) {
            // userData('user', response.data);
          }
        
          return response.data

    } catch(error) {
        console.log(error)
        return error
    }
}

// get logged in user
 export const getMe = async (userToken) => {
      try{
           const config = {
                headers: {
                    'Authorization': `bearer ${userToken}`
                }
           } 
           
         const response = await axios.get(API_URL + 'user/me', config)

     return response.data
      } catch (error) {
            console.log(error)
       }
}


// become an instructor 
export const becomeInstructor = async (userToken) => {
       try{
           const config = {
                headers: {
                    'user-token':userToken
                }
           }

           const response = await axios.get(API_URL + 'becomeInstructor', config)

           return response.data

       } catch (error) {
           console.log(error)
       }
}