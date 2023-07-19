import React, { useState } from 'react'
import { Tab,Nav,Button,Modal } from 'react-bootstrap'

import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'

const CONVERSATION_KEY='conversation'
const CONTACT_KEY='contacts'

export default function Sidebar({id}) {
  const [activeKey,setActiveKey]=useState(CONVERSATION_KEY)
  const [modalOpen,setModalOPen]=useState(false)

  const conversationOpen=activeKey===CONVERSATION_KEY

  function closeModal(){
    setModalOPen(false)
  }
  return (
    <div style={{width:'250px'}} className='d-flex flex-column'>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant='tabs' className='justify-content-center'>
            <Nav.Item>
              <Nav.Link eventKey={CONVERSATION_KEY}>Conversation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className='border-rigth border-dark overflow-auto flex-grow-1 m-2' style={{borderRightWidth:'1px solid #ccc'}}>
            <Tab.Pane eventKey={CONVERSATION_KEY}>
              <Conversations/>
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACT_KEY}>
              <Contacts/>
            </Tab.Pane>
          </Tab.Content>
          <div className='p-2 border-top border-right small'>
            Your Id: <span className='text-muted'>{id}</span>
          </div>
          <Button className='rounded-0'onClick={()=>setModalOPen(true)}>
            New {conversationOpen ? 'Conversation':'Contacts'}
          </Button>
        </Tab.Container>
        <Modal show={modalOpen} hide={closeModal}>
          {conversationOpen? 
            <NewConversationModal closeModal={closeModal}/>:
            <NewContactModal  closeModal={closeModal}/>}
        </Modal>
    </div>
  )
}
