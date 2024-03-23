import AddEntity from "./components/add-entity"
import Canvas from "./components/canvas"
import EntitiesList from "./components/entities-list"
import FetchEntitiesButton from "./components/fetch-entities-buttons"
import FindEntity from "./components/find-entity"


function App() {

  return (
    <>
      <EntitiesList />
      <AddEntity />
      <FetchEntitiesButton />
      <FindEntity />
      <Canvas />
    </>
    
  )
}

export default App
