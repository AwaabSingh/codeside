import axios from 'axios'

const API_URL = 'https://aqueous-beyond-13704.herokuapp.com';

import { writable } from 'svelte/store'

export const getCart = writable([])

export  const config = {
    headers: {
        'content-type': 'application/json'
    }
}
//  const getCart = async (userToken) => {
//     try{
       

//         const response = await axios.get(API_URL + 'getcart', userToken)

//         console.log(response)

//           getUserCart.set(response.data)

//     } catch(error) {
//         console.log(error)
//         return error
//     }
// }

// getCart()