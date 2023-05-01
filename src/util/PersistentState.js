import { useEffect, useState } from "react";

// CUSTOM HOOKS
// 1. start the hook name with 'use'
// 2. return data of a custom hook should be an ARRAY
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  // TWO PARAMETERS : 1 - effect function, 2 - Array of dependencies []
  // if no array of dependencies, effect will run on mount and EVERY RENDER
  // if with aOd, will run effect if state changes
  // empty array, will run effect on mount only!
  useEffect(() => {
    console.log(key + "_EFFECT!");
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useSemiPersistentState;
