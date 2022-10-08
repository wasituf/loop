import styles from '../styles/Controls.module.css'
import { useState, useEffect } from 'react'

export default function Controls({
  playing,
  switchPlayState,
  volume,
  updateVolume,
}) {
  return (
    <footer className={styles.controlsContainer}>
      <div className={styles.gridItem}></div>
      <div className={styles.gridItem}>
        <div
          className={
            playing ? styles.controlBtnOuter : styles.controlBtnOuterPaused
          }
        >
          <button className={styles.controlBtn} onClick={switchPlayState}>
            {playing ? (
              <>
                <div className={styles.btnPauseLeft}></div>
                <div className={styles.btnPauseRight}></div>
              </>
            ) : (
              <div className={styles.btnPlay}></div>
            )}
          </button>
        </div>
      </div>
    </footer>
  )
}
