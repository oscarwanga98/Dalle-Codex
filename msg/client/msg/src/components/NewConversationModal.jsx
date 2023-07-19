import React, { useState } from 'react'
import { Form,Button,Modal } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'
import { useConversations } from '../context/ConversationProvider'


export default function NewConversationModal({closeModal}) {

  const [selectedContactId,setSelectedContactId]=useState([])
  const {contacts}=useContacts()
  const {createConversation} =useConversations()

  function handleSubmit(e){
    e.preventDefault()

    createConversation(selectedContactId)
    closeModal()
  }

  function handleCheckboxChange(contactId){
    setSelectedContactId(prevSelectedContactIds=>{
      if(prevSelectedContactIds.includes(contactId)){
        return prevSelectedContactIds.filter(prevId=>{
          return contactId !== prevId
        })
      }else{
        return [...prevSelectedContactIds,contactId]
      }
    })
  }
  return (
    <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {contacts.map(contact=>(
                  <Form.Group controlId={contact.id} key={contact.id}>
                    <Form.Check
                      type='checkbox'
                      value={selectedContactId.includes(contact.id)}
                      label={contact.name}
                      onChange={()=>handleCheckboxChange(contact.id)}
                    />
                  </Form.Group>))
                }
                <Button type='submit' className='mt-3'>Create</Button>
            </Form>
        </Modal.Body>
    
    
    </>
  )
}
