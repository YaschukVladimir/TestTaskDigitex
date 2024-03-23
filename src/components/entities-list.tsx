import { useSelector } from "react-redux";
import { Entity, State, ToChangeEntityStringType } from "../types/types";
import { editEntity, removeEntity } from "../store/app-slice";
import { useAppDispatch } from "../hooks/use-app-dispatch";

function EntitiesList(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const entitiesFromStore = useSelector((state: State) => state.appSlice.entities);
    const handleRemoveEntity = (id: string) => {
        dispatch(removeEntity(id))
    };

    const handleChangeEntity = (evt: React.ChangeEvent<HTMLInputElement>, entity: Entity, type: ToChangeEntityStringType) => {
        switch (type) {
            case 'name':
                dispatch(editEntity({
                    id: entity.id,
                    name: evt.target.value,
                    coords: {
                        x: entity.coords.x,
                        y: entity.coords.y
                    },
                    labels: entity.labels
                }))
                break;
            case 'coordX':
                dispatch(editEntity({
                    id: entity.id,
                    name: entity.name,
                    coords: {
                        x: evt.target.value,
                        y: entity.coords.y
                    },
                    labels: entity.labels
                }))
                break;
            case 'coordY':
                dispatch(editEntity({
                    id: entity.id,
                    name: entity.name,
                    coords: {
                        x: entity.coords.x,
                        y: evt.target.value,
                    },
                    labels: entity.labels
                }))
                break;
            case 'labels':
                dispatch(editEntity({
                    id: entity.id,
                    name: entity.name,
                    coords: {
                        x: entity.coords.x,
                        y: entity.coords.y,
                    },
                    labels: evt.target.value
                }))
                break;
        }
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
                                        onChange={(evt) => handleChangeEntity(evt, entity, 'name')}
                                    >
                                    </input>
                                    <input
                                        className="list__data"
                                        defaultValue={entity.coords.x}
                                        onChange={(evt) => handleChangeEntity(evt, entity, 'coordX')}
                                    >
                                    </input>
                                    <input
                                        className="list__data"
                                        defaultValue={entity.coords.y}
                                        onChange={(evt) => handleChangeEntity(evt, entity, 'coordY')}
                                    >
                                    </input>
                                    <input
                                        className="list__data"
                                        defaultValue={entity.labels}
                                        onChange={(evt) => handleChangeEntity(evt, entity, 'labels')}
                                    >
                                    </input>
                                </div>
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
