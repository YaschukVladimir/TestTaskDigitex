import { useDispatch, useSelector } from "react-redux";
import { Entity, State } from "../types/types";
import { editEntity, removeEntity } from "../store/app-slice";
import { useState } from "react";


function EntitiesList(): React.JSX.Element {
    const dispatch = useDispatch();
    const entitiesFromStore = useSelector((state: State) => state.appSlice.entities);
    const handleRemoveEntity = (id: string) => {
        console.log(id)
        dispatch(removeEntity(id))
    };
    const [name, setName] = useState('');
    const [coordX, setCoordX] = useState(0);
    const [coordY, setCoordY] = useState(0);
    const [labels, setLabels] = useState('');

    const handleEditEntity = (id: string) => {
        const editedEntity: Entity = {
            id: id,
            name: name,
            coords: {
                x: coordX,
                y: coordY,
            },
            labels: labels.split(',')
        }
        dispatch(editEntity(editedEntity))
    }


    if (entitiesFromStore.length) {
        return (
            <div className="container">
                <ul className="entity__list">
                    {entitiesFromStore.map((entity) => {
                        return (
                            <li className="list__element" key={entity.id}>
                                <div className="list__container">
                                    <input
                                        className="list__data"
                                        defaultValue={entity.name}
                                        onChange={(evt) => setName(evt.currentTarget.value)}>
                                    </input>
                                    <input
                                        className="list__data"
                                        defaultValue={entity.coords.x}
                                        onChange={(evt) => setCoordX(Number(evt.currentTarget.value))}>
                                    </input>
                                    <input
                                        className="list__data"
                                        defaultValue={entity.coords.y}
                                        onChange={(evt) => setCoordY(Number(evt.currentTarget.value))}>
                                    </input>
                                    <input
                                        className="list__data"
                                        defaultValue={entity.labels}
                                        onChange={(evt) => setLabels(evt.currentTarget.value)}>
                                    </input>
                                </div>
                                <button className="list__btn edit btn" onClick={() => handleEditEntity(entity.id)}>edit entity</button>
                                <button className="list__btn remove btn" onClick={() => handleRemoveEntity(entity.id)}>remove entity &times;</button>
                            </li>

                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="container">There is no entities, you can add some</div>
        )
    }

}

export default EntitiesList;
