import React, { useContext, useState } from 'react'
import './App.css'
import styles from '.app.module.scss'
import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'
import { AuthContext } from './context/auth'
import { SendMessageForm } from './components/SendMessageForm'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList/>
      {!!user ?<SendMessageForm/> : <LoginBox/>}
    </main>
  )
}

