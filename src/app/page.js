'use client'

import React, { useState, useEffect } from "react";

import Image from 'next/image'
import styles from './page.module.css'


import Form from './form.js'

export default function Home() {
  const [userLogged, setUserLogged] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUserLogged(storedUser)
    } else {
  
    }

  })
  


  return (
    <main className={styles.main}>
      <div>
        <p>aaa</p>
        <p>Logged in as {userLogged}</p>

        <Form setUserLogged={setUserLogged}/>
         
        <h1 className={styles.bob}>assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}assasdasdad{'\n'}</h1>
      </div>
    </main>
  )
}

