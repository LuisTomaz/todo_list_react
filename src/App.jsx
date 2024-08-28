import { useState } from 'react'
import './App.css'

function App() {


  const [item, setItem] = useState("")
  const [items, setItems] = useState([])

  function Submit(e) {
    e.preventDefault()

    const newItem = { id: item, completed: false }
    setItems([...items, newItem])
    setItem("")
  }

  function deleteItem(itemId) {

    const newItems = items.filter(item => item.id !== itemId)
    setItems(newItems)
  }

  function completeItem(itemId) {

    const findItem = items.find(item => item.id === itemId)
    findItem.completed = !findItem.completed
    const newItems = items.filter(item => item.id !== itemId)
    setItems([...newItems, findItem])

  }

  return (
    <>
      <h1>To<span id='span_do'>do</span> List</h1>
      <form onSubmit={Submit}>
        <input type='=text' placeholder='Digite o item' value={item} onChange={e => setItem(e.target.value)} />
        <button type='submit'>Adicionar</button>
      </form>

      <ul>
        {items.map(item => (
          <li><button onClick={() => completeItem(item.id)}>{item.completed ? "Completo" : "À Fazer"}</button>
            <div style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.id}</div> <button onClick={() => deleteItem(item.id)}>Excluir</button></li>
        ))}
      </ul>
    </>
  )
}

export default App
