
//* First example

// const useLocalStorage = (key = '', initialValue = '') => {
//     const [state, setState] = useState(() => {
//         try {
//             const item = window.localStorage.getItem(key);
//             return item ? JSON.parse(item) : initialValue;
//         } catch (error) {
//             return initialValue;
//         }
//     });

//     const setLocalStorageState = newState => {
//         try {
//             const newStateValue =
//                 typeof newState === 'function' ? newState(state) : newState;
//             setState(newStateValue);
//             window.localStorage.setItem(key, JSON.stringify(newStateValue));
//         } catch (error) {
//             console.error(`Unable to store new value for ${key} in localStorage.`);
//         }
//     };

//     return [state, setLocalStorageState];
// };

// export default useLocalStorage;



//* Example 2
// Anything that i save to localStorage will be saved 
import { useState, useEffect } from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}