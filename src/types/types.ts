import store from "../store";

export type InitialStateType = {
    entities: Entity[];
} 

export type Entity = {
    id: string,
    name: string,
    coords: Coords,
    labels: string[]
};

type Coords = {
    x: number,
    y: number
};
export type State = ReturnType<typeof store.getState>;

export type CoordsArr = [number, number];