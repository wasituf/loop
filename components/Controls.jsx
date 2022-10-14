import styles from '../styles/Controls.module.css'
import { FaSlidersH } from 'react-icons/fa'
import { MdVolumeUp, MDVolumeOff } from 'react-icons/md'
import { useState, useEffect } from 'react'

export default function Controls({
  playing,
  switchPlayState,
  eqState,
  updateEqState,
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
      <div className={styles.gridItem}>
        <button
          className={styles.eq}
          onClick={e => {
            updateEqState(e)
          }}
        >
          <FaSlidersH
            size={24}
            style={{ color: `#${eqState ? '555' : 'fff'}` }}
            className={eqState ? styles.eqRotateIn : styles.eqRotateOut}
          />
        </button>
      </div>
    </footer>
  )
}
