// import { combineReducers } from 'redux';
// import { authReducer } from './authSlice';
// import { authApiReducer } from './authApi';

// //end imports
// const appReducer = combineReducers({ auth: authReducer, api: authApiReducer }); //<<  combine all reducers

// export const rootReducer = (state, action) => {
//   if (action.type === 'RESET_STORE') {
//     // For me on Nextjs the action type is HYDRATE not RESET_STORE
//     // clear storage as @ghost suggested
//     Object.keys(state).forEach(key => {
//       storage.removeItem(`persist:${key}`);
//     });
//     // now destructor the returned action.payload object and get rig of _persist key
//     state = (({ _persist, ...rest }) => rest)(action.payload);
//   }

//   return appReducer(state, action);
// };
