import {configureStore} from '@reduxjs/toolkit';
import appSlice from './app-slice';

export default configureStore({
    reducer: {appSlice}
});
