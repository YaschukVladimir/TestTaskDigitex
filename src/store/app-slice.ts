import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { Entity, InitialStateType } from '../types/types';

const initialState: InitialStateType = {
    entities: []
}



const appSlice = createSlice({
    name: 'entities',
    initialState: initialState,
    reducers: {
        addEntity(state, action: PayloadAction<Entity>) {
            state.entities.push(action.payload);
        },
        removeEntity(state, action) {
            console.log(state.entities);
            const result = state.entities.filter((entity) => {
               return entity.id !== action.payload;
            });
            state.entities = result;
        },
        editEntity(state, action) {
            const editedEntity = action.payload;
            const entityToEditIndex = state.entities.findIndex((entity) => entity.id === action.payload.id);
            state.entities.splice(entityToEditIndex, 1, editedEntity);
        },
        clearState(state) {
            state.entities = [];
        }
    }
});

export const {addEntity, removeEntity, editEntity, clearState} = appSlice.actions;
export default appSlice.reducer;

