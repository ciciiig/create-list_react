import './App.css'
import { useState } from 'react'
import ItemListForm from './components/ItemListForm';

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

      <ItemListForm
        handleSubmit={handleSubmit}
        textIputValue={textIputValue}
        setTextIputValue={setTextIputValue} />

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
