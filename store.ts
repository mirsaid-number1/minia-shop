import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/counterSlice';
import ProductSlice from './features/productSlice';
import SingleItemSlice from './features/singleItemSlice';
export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    products:ProductSlice,
    product: SingleItemSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch