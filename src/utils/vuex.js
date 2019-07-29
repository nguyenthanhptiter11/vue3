/* eslint-disable */
export const set = property => (state, payload) => (state[property] = payload)
/* eslint-disable */
export const toggle = property => state => (state[property] = !state[property])
/* eslint-disable */
export const mapSetter = (state, setters = {}) => (
    Object.keys(state).reduce((acc, stateName) => {
      acc[stateName] = {
        get: state[stateName],
     };
     // check if setter exists
     if (setters[stateName]) {
        acc[stateName].set = setters[stateName];
     }
  
     return acc;
   }, {})
);