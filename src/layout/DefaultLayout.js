import React from 'react'
import Footer from './partials/Footer.comp'
import Header from './partials/Header.comp'

export default function DefaultLayout({children}) {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}
