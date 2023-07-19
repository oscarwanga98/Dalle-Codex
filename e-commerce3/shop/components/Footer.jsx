import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'

import { urlFor } from '@/LIB/client'

function Footer() {
  return (
   <div className="footer-container">
    <p>{new Date().getFullYear()} Hause All rights reserved </p>
    <p className='icons'>
      <AiFillInstagram/>
      <AiOutlineTwitter/>
    </p>
   </div>
  )
}

export default Footer