import { useEffect, useState } from 'react'
import styles from '../styles/InfoTab.module.css'

export default function InfoTab({ eqState }) {
  const [scrollStyle, setScrollStyle] = useState(styles.isRightOverflowing)

  useEffect(() => {
    const elScroll = { target: document.querySelector(`.${scrollStyle}`) }
    updateScrollStyles(elScroll)
  })

  useEffect(() => {
    const elScroll = { target: document.querySelector(`.${scrollStyle}`) }
    window.addEventListener('resize', () => {
      updateScrollStyles(elScroll)
    })
  })

  const updateScrollStyles = e => {
    const isScrollable = e.target.scrollWidth > e.target.clientWidth

    const isScrolledToRight =
      e.target.scrollWidth <= e.target.clientWidth + e.target.scrollLeft
    const isScrolledToLeft = e.target.scrollLeft === 0

    if (isScrollable) {
      if (!isScrolledToLeft && !isScrolledToRight) {
        setScrollStyle(styles.isBothOverflowing)
      } else if (isScrolledToRight) {
        setScrollStyle(styles.isLeftOverflowing)
      } else if (isScrolledToLeft) {
        setScrollStyle(styles.isRightOverflowing)
      }
    } else {
      setScrollStyle(styles.isNoneOverflowing)
    }
  }

  return (
    <div className={styles.container}>
      <div className={scrollStyle} onScroll={updateScrollStyles}>
        <div className={styles.preset}>Beach</div>
        <div className={styles.preset}>Forest</div>
        <div className={styles.preset}>Moody</div>
        <div className={styles.preset}>Bonfire</div>
        <div className={styles.preset}>Some name</div>
        <div className={styles.preset}>Some name</div>
        <div className={styles.preset}>Some name</div>
      </div>
    </div>
  )
}
