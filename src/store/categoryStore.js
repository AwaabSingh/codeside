import { writable} from 'svelte/store'
import axios from 'axios';

const API_URL = 'https://aqueous-beyond-13704.herokuapp.com/';

export const categories = writable([])

// get all categories 
const getAllCategories = async () => {
        try {
            const response = await axios.get(API_URL + 'getcategories')

            categories.set(response.data)
        } catch (error) {
              console.log(error)
        }
}
getAllCategories();