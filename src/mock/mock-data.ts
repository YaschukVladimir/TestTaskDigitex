import { Entity } from "../types/types";
import { getRandomInt } from "../utils";

export const mockData: Entity[] = [
    {
        id: '2',
        name: 'Entity1',
        coords: {
            x: getRandomInt(-10, 10),
            y: getRandomInt(-10, 10)
        },
        labels: ['labelA', 'labelB', 'labelE']
    },
    {
        id: '3',
        name: 'Entity2',
        coords: {
            x: getRandomInt(-10, 10),
            y: getRandomInt(-10, 10)
        },
        labels: ['labelC', 'labelD']
    },
    {
        id: '1',
        name: 'Entity3',
        coords: {
            x: getRandomInt(-10, 10),
            y: getRandomInt(-10, 10)
        },
        labels: ['labelA', 'labelC']
    },
    {
        id: '4',
        name: 'Entity4',
        coords: {
            x: getRandomInt(-10, 10),
            y: getRandomInt(-10, 10)
        },
        labels: ['labelA', 'labelC']
    },
    {
        id: '5',
        name: 'Entity5',
        coords: {
            x: getRandomInt(-10, 10),
            y: getRandomInt(-10, 10)
        },
        labels: ['labelB']
    },
]


export const jsonMock = JSON.stringify(mockData);
