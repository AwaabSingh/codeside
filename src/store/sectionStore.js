import axios from 'axios'

const API_URL = 'https://aqueous-beyond-13704.herokuapp.com/';


//  add section 
export const addSection = async (sectionData, userToken) => {
     try {
         const config = {
             headers: {
                  'Authorization': `Bearer ${userToken}`
             }
         }

         const response = await axios.post(API_URL + '/Addsection', sectionData, config)

         return response.data
     } catch (error) {
          console.log(error)
     }
}