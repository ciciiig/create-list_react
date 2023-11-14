import './App.css'
import { useState } from 'react'
import ItemListForm from './components/ItemListForm';
import ItemListComponent from './components/ItemListComponent';

export type ItemListType = {
  id: string;
  value: string;
}

export default function App() {
  const [textIputValue, setTextIputValue] = useState("...")
  const [itemList, setItemList] = useState<ItemListType[]>([])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!textIputValue) return
    setItemList((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), value: textIputValue }]
    })

    document.getElementById('input')?.focus()
  }

  return (
    <>
      <hr />
      <h1 className='title'>Hello</h1>
      <hr />
      <p className="text-input-value">{textIputValue}</p>

      <ItemListForm
        handleSubmit={handleSubmit}
        textIputValue={textIputValue}
        setTextIputValue={setTextIputValue} />

      <ItemListComponent itemList={itemList} />
      <hr />
    </>
  )
}
