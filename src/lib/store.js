// store.js
// import { writable } from 'svelte/store';
// import { browser } from '$app/env';


// const createWritableStore = (key, startValue) => {
//   const { subscribe, set } = writable(startValue);
  
//   return {
//     subscribe,
//     set,
//     useLocalStorage: () => {
//       const json = browser && localStorage.getItem(key)
//       if (json) {
//         set(JSON.parse(json));
//       }
      
//       subscribe(current => {
//          browser && localStorage.setItem(key, JSON.stringify(current))
//       });
//     }
//   };
// }
// export const sessionManager = createWritableStore('user', {});

// export const userLoc = writable(
//    browser && (localStorage.getItem('user'))
// );

// userLoc.subscribe((val) => browser && localStorage.setItem('user', val))


// export const userData = (key, initial) => {
//   const pre = localStorage.getItem(key)
//   const data = pre ? JSON.parse(pre) : initial;

//   const store = writable(data, () => {
//     const unsubscribe = store.subscribe((val) => {
//        localStorage.setItem(key, JSON.stringify(val))
//     })
//     return unsubscribe;
//   })
//   return store
// }

// export const useLocalStorage = (key, initial) => {
//    const preData = browser && (localStorage.getItem(key))
//    const data = preData ? JSON.parse(preData) : initial;

//    const storage = writable(data, () => {
//       const sub = storage.subscribe(value => {
//       browser && localStorage.setItem(key, JSON.stringify(value));
//       })
//       return sub
//    })
//    return storage;
// }



// let isLoggedIn
// let isLogged;
// if (browser) {
//   const isLoggedIn= localStorage.getItem("user");

//   isLogged = writable(isLoggedIn);
//   isLogged.subscribe(value => {
//     localStorage.setItem("user", value);
//   })
// }
// export {isLogged};