import { useState } from 'react'
import styles from '../styles/Header.module.css'
import { FiDownload } from 'react-icons/fi'

export default function Header({ installPrompt }) {
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
              transform: menuOpen ? 'rotate(-25deg) translateY(1px)' : 'none',
            }}
          ></div>
          <div
            className={styles.bottom}
            style={{
              transform: menuOpen ? 'rotate(25deg) translateY(-1px)' : 'none',
            }}
          ></div>
        </button>

        <button className='install-btn' onClick={installPrompt}>
          <span>Install</span>
          <FiDownload size={16} color='#ededed' />
        </button>
      </div>
    </header>
  )
}
