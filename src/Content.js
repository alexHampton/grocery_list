
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {  

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      ) : (
        <p>empty</p>
      )}
    </>
  )
}

export default Content