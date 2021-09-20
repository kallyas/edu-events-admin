import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './features'

export default configureStore({
  reducer: rootReducer,
})