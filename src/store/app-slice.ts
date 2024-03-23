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
            const result = state.entities.filter((entity) => {
               return entity.id !== action.payload;
            });
            state.entities = result;
        },
        editEntity(state, action) {
            const editedEntity = action.payload;
            state.entities = [...state.entities.map((entity) => {
                if (entity.id === editedEntity.id) {
                    return {...editedEntity};
                }
                return entity;
            })]
            
        },
        clearState(state) {
            state.entities = [];
        },
    }
});

export const {addEntity, removeEntity, editEntity, clearState} = appSlice.actions;
export default appSlice.reducer;

