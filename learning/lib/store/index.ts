
import { configureStore, type UnknownAction } from '@reduxjs/toolkit';
import type {ThunkAction} from 'redux-thunk';
import { rootReducer, type RootState } from './root-reducer';


// ✅ Option A: infer the acceptable preloaded-state type from the reducer itself
type Preloaded = Parameters<typeof rootReducer>[0];


export const makeStore =(preloadedState?: Preloaded)=> configureStore({
        reducer:rootReducer,
        preloadedState ,
        devTools:process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'||
        process.env.NODE_ENV !== 'production',
        // middleware: (getDefault) => getDefault(), // customize if needed
})


export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<Return = void> = ThunkAction<
    Return,
    RootState,
    unknown,
    UnknownAction
>;

