import { useSelector } from "react-redux";
import { Entity, State } from "../types/types";
import { RefObject, useRef, useState } from "react";


function FindEntity(): React.JSX.Element {
    const inputRef = useRef() as RefObject<HTMLInputElement>;
    const input = inputRef.current as HTMLInputElement
    const [entityToFind, setEntityToFind] = useState({ x: '', y: '' });
    const [findedEntity, setFindedEntity] = useState<Entity | undefined>();
    const entitiesFromStore = useSelector((state: State) => state.appSlice.entities);

    const findEntity = (x: string, y: string) => {
        const res = entitiesFromStore.find((entity) => {
            return Number(entity.coords.x) === Number(x) && Number(entity.coords.y) === Number(y);
        });
        setFindedEntity(res);
        setEntityToFind({ x: '', y: '' });
        input.value = '';
    };

    return (
        <div className="container">
            <fieldset>
                <legend>set coords (x,y)</legend>
                <input type="text"
                    ref={inputRef}
                    onChange={(evt) => {
                        const coordX = evt.currentTarget.value.split(',')[0];
                        const coordY = evt.currentTarget.value.split(',')[1];
                        setEntityToFind({ x: coordX, y: coordY });
                    }}>
                </input>
                <button className="find__btn btn" onClick={() => {
                    findEntity(entityToFind.x, entityToFind.y);
                }}>Find</button>
                <ul className="entity-data__list">
                    <li><span>Entity name:</span><span>{findedEntity ? `${findedEntity?.name}` : ''}</span></li>
                    <li><span>Entity labels:</span><span>{findedEntity ? `${findedEntity?.labels}` : ''}</span></li>
                </ul>
            </fieldset>
        </div>
    )
}

export default FindEntity;
