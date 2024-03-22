import { useDispatch } from "react-redux";
import { Entity } from "../types/types";
import { useForm } from 'react-hook-form';
import { addEntity } from "../store/app-slice";

type FormValues = Entity;

function AddEntity ():React.JSX.Element {
    const dispatch = useDispatch();
    const { register, reset, getValues } = useForm<FormValues>({mode: 'onChange'});
    const handleAddEntity = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        dispatch(addEntity({
            id: new Date().toISOString(),
            name: getValues('name'),
            coords: {
                x: getValues('coords.x'),
                y: getValues('coords.y')
            },
            labels: getValues('labels')
            
        }))
        reset();
    }

    return (
        <div className="form__wrapper container">
            <form>
                <label>
                    <input
                    {...register('name')}
                    className="form__input"
                    type="text"
                    autoComplete="off"
                    placeholder="Entity name"
                    onChange={() => {
                        console.log(getValues(), 'form values');
                    }}
                    />   
                </label>
                <label>
                    <input
                    {...register('coords.x')}
                    className="form__input"
                    type="number"
                    autoComplete="off"
                    placeholder="coordinate x"
                    onChange={() => {
                        console.log(getValues(), 'form values');
                    }}
                    />   
                    <input
                    {...register('coords.y')}
                    className="form__input"
                    type="number"
                    autoComplete="off"
                    placeholder="coordinate y"
                    onChange={() => {
                        console.log(getValues(), 'form values');
                    }}
                    />   
                </label>
                <label>
                    <input
                    {...register('labels')}
                    className="form__input"
                    type="text"
                    autoComplete="off"
                    placeholder="labels"
                    onChange={() => {
                        console.log(getValues(), 'form values');
                    }}
                    />   
                </label>
                <button className="form__button" type="submit" onClick={(evt) => handleAddEntity(evt)}> add entity</button>
            </form>
        </div>
    );
}

export default AddEntity;
