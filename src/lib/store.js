// store.js
import { writable } from 'svelte/store';

// const preStore = (key, initial) => {
//    const pre = localStorage.getItem(key);
//    const data = pre ? JSON.parse(pre) : initial;

//    const store = writable(data, () => {
//       const unsubscribe = store.subscribe(value => {
//          localStorage.setItem(key, JSON.stringify(value))
//       })
//        return unsubscribe;
//    })
//    return store
// }
// export const sessionManager = ('user', {});

// const createWritableStore = (key, startValue) => {
//   const { subscribe, set } = writable(startValue);
  
//   return {
//     subscribe,
//     set,
//     useLocalStorage: () => {
//       const json = localStorage.getItem(key);
//       if (json) {
//         set(JSON.parse(json));
//       }
      
//       subscribe(current => {
//         localStorage.setItem(key, JSON.stringify(current));
//       });
//     }
//   };
// }

// export const sessionManager = createWritableStore('user', {});


