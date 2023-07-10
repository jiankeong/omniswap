import { configureStore,combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import setting from './setting'
import tabbar from './tabbar'

const persistConfig = {
  key:'persistStore',
  storage:storage,
  blacklist: ['tabbar']
}

let allReducers = combineReducers({
  setting:setting,
  tabbar
})
const persistedReducer = persistReducer(persistConfig, allReducers)

let store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
let persistore = persistStore(store)


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {persistore}
export default store