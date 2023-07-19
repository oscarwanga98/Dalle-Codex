import useLocalStroage from "../hooks/useLocalStroage"
import Login from "./login"
import Dashboard from "./Dashboard"
import React from "react"
import { ContactsProvider } from "../context/ContactsProvider"
import { ConversationsProvider } from "../context/ConversationProvider"
import { SocketProvider } from "../context/SocketProvider"

function App() {

  const [id,setId]=useLocalStroage()
  const dashboard=(
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
        <Dashboard id={id}/>
        </ConversationsProvider>        
      </ContactsProvider>
    </SocketProvider>
      
  )
  
  return (id ? dashboard :<Login onIdSubmit={setId}/>)
}

export default App
