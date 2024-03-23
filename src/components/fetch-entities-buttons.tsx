
import { mockData } from "../mock/mock-data";
import { addEntity, clearState } from "../store/app-slice";
import { url } from "../utils";
import { useAppDispatch } from "../hooks/use-app-dispatch";

function FetchEntitiesButton ():React.JSX.Element {
    const dispatch = useAppDispatch();
    const fetchEntities = () => {
            fetch(url, {
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                },
                mode: 'no-cors'
              })
              .then((response) => {
                if (response) {
                    mockData.forEach((entity) => {
                        dispatch(addEntity(entity));
                    })
                }
              })
    };
    return (
        <div className="container">
            <button className="fetch__btn btn" onClick={() => fetchEntities()}>fetch entities</button>
            <button className="reset__btn btn" onClick={() => dispatch(clearState())}>reset</button>
        </div>
    )
}

export default FetchEntitiesButton;
