import './App.css';
import { useState } from 'react';
import { ItemListForm } from './components/ItemListForm';
import { ItemListComponent } from './components/ItemListComponent';
import { ItemListType } from './type.ts';
import { BaseLayout } from "./components/BaseLayout/BaseLayout.tsx";

export default function App() {
  const [textInputValue, setTextInputValue] = useState('...');
  const [itemList, setItemList] = useState<ItemListType[]>([]);

  const getBackSomeValue = (value: string) => {
    console.log(value);
  }

  return (
      <BaseLayout textInputValue={textInputValue} callbackFunction={getBackSomeValue}>
          <ItemListForm
              textInputValue={textInputValue}
              setTextInputValue={setTextInputValue}
              setItemList={setItemList}
          />
          <ItemListComponent itemList={itemList} />
      </BaseLayout>
  )
}
