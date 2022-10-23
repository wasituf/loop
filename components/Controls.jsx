import styles from '../styles/Controls.module.css'
import { FaStopwatch, FaShareAlt } from 'react-icons/fa'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { useState, useEffect } from 'react'

export default function Controls({ playing, switchPlayState }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.controlsContainer}>
        <button className={styles.timerBtn}>
          <FaStopwatch size={20} color={'#333'} />
        </button>

        <button className={styles.controlBtn} onClick={switchPlayState}>
          {playing ? (
            <MdVolumeUp size={34} color={'#333'} />
          ) : (
            <MdVolumeOff size={34} color={'#555'} />
          )}
        </button>

        <button className={styles.shareBtn}>
          <FaShareAlt size={20} color={'#333'} />
        </button>
      </div>
    </footer>
  )
}
