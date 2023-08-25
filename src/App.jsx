import React from 'react'
import { Navbar } from './Components/Navbar'
import { Header } from './Components/Header'
import { Feature } from './Components/Feature'
import { Offer } from './Components/Offer'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
    </div>
  )
}
