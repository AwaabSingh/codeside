import { writable as internal, get } from 'svelte/store'
import { browser } from '$app/env' // sveltekit environment 

export function writable(key, initialValue) {
    
  const store = internal(initialValue)
  const {subscribe, set} = store
  // check if in client
  if(browser){
    const json = localStorage.getItem(key)
    if (json) { set(JSON.parse(json)) }
  } 
  
  return {
    set(value) {
    // check if in client
      if(browser){
        localStorage.setItem(key, JSON.stringify(value))
      }
      set(value)
    },
    update(cb) {
      const value = cb(get(store))
      this.set(value)
    },
    subscribe
  }
} 

// const createStore = (key, initialVal) => {
//     const {set, subscribe} = writable(initialVal)

//     return {
//         set,
//         subscribe,
//         useLocStore: () => {
//             if(browser){
//                 const json = localStorage.getItem(key)
//                 if (json) { set(JSON.stringify(json)) }
//               } 

//               subscribe(curr => {
//                   browser && localStorage.setItem(key, curr)
//               })
//         }
//     }
// }

export const useLoc = writable('user', {})