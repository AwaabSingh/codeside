import axios from 'axios'


const API_URL = 'https://aqueous-beyond-13704.herokuapp.com';

import { writable } from 'svelte/store'


export const getCart = writable([])
export const getCheckout = writable()
export const deleteCart = writable(false)
// export const addCart = writable([])

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
 export const addCart = async (coursePk) => {
     try {
         
        const response = await axios.get(API_URL + `getcousebyid?coursePk=${coursePk}`)

         console.log(response)

        return response.data
     } catch (error) {
          console.log(error)
     }
}

export const delCart = async (config, cosPk) => {
    try {
        const response = await axios.delete(API_URL + `deleteitem?courseKey=${cosPk}`, config)
    } catch (error) {
         console.log(error)
    }
}