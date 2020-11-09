import React from "react"
import Routes from './routes'
import Header from './features/Header/index'
import Footer from './features/Footer/index'

export default function App() {


  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  )
}