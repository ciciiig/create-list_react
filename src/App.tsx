import { useState } from 'react'
import './App.css'

type ItemList = {
  id: string;
  value: string;
}

export default function App() {
  const [textIputValue, setTextIputValue] = useState("")
  const [itemList, setItemList] = useState<ItemList[]>([])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!textIputValue) return
    setItemList((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), value: textIputValue }]
    })

    document.getElementById('input')?.focus()
  }

  return (
    <div className='app-container'>
      <hr />
      <h1 className='title'>Hello</h1>
      <hr />
      <p className="text-input-value">{textIputValue}</p>

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor='item'>Type it in: </label>
          <input
            value={textIputValue}
            onChange={(e) => setTextIputValue(e.target.value)}
            onFocus={(e) => e.target.select()}
            type='text'
            id='input' autoFocus />
        </div>
        <button className="text-input" type="submit">Add text input value</button>
      </form>

      {itemList.length === 0 && <p>No Items</p>}
      <ol>
        {itemList.map((item) => {
          return <li key={item.id}>{item.value}</li>
        })}
      </ol>
      <hr />
    </div>
  )
}
