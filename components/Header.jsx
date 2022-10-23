import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Header.module.css'

export default function Header({}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHamburgerClick = e => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.innerDiv}>
        <button onClick={handleHamburgerClick} className={styles.hamburger}>
          <div
            className={styles.top}
            style={{
              transform: menuOpen && 'rotate(-25deg) translateY(1px)',
            }}
          ></div>
          <div
            className={styles.bottom}
            style={{
              transform: menuOpen && 'rotate(25deg) translateY(-1px)',
            }}
          ></div>
        </button>
      </div>
    </header>
  )
}
