import React from 'react'
import Head from 'next/head'
import { Navbar,Footer } from './Index'

function Layout({children}) {
  return (
    <div className='layout'>
      <Head>
        <title>Hause Store</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout