import './App.css'
import { GeneralHookRules } from './components/GeneralHookRules/GeneralHookRules'
import { UseEffect } from './components/UseEffect/UseEffect'
import { UseRef } from './components/UseRef/UseRef'
import { UseState } from './components/UseState/UseState'

export default function App() {

  return (
    <>
      <GeneralHookRules />
      <UseState />
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
    </>
  )
}
