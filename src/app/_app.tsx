import { configureStore, createSlice, createStore, PayloadAction } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage'
import { AppProps } from "next/app";
import { Suspense } from 'react';

const initialState: string[] = [];

const persistConfig = {
  key: 'root',
  storage,
}

const initSlice = createSlice({
  name: 'initSlice',
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<string>) {
      state.push(action.payload)
    }
  },
})
const persistedReducer = persistReducer(persistConfig, initSlice.reducer)
const MainStore = configureStore({
  reducer: persistedReducer
})

const App = ({ Component, pageProps }: AppProps) => {
    return ( 
        <Provider store={MainStore}>
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...pageProps} />
            </Suspense>
        </Provider>
     );
}

export default App;