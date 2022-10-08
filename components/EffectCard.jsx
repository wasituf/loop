import styles from '../styles/EffectCard.module.css'
import { useState } from 'react'

export default function EffectCard({ name, masterPlaying, volume, filename }) {
  const [playing, setPlaying] = useState(false)

  const changeState = e => {
    const audio = e.target.querySelector('audio')
    if (audio) {
      audio.muted = !masterPlaying
      audio.volume = volume
      if (audio.paused) {
        audio.play()
        setPlaying(true)
      } else if (!audio.paused) {
        audio.pause()
        setPlaying(false)
      }
    }
  }

  return (
    <div className={playing ? styles.playing : styles.cardContainer}>
      <div onClick={changeState} className={styles.card}>
        <audio
          src={`/audio/${filename}.mp3`}
          onTimeUpdate={e => {
            const audio = e.target
            if (audio.currentTime > audio.duration - 0.4) {
              audio.currentTime = 0
              audio.play()
            }
            audio.muted = !masterPlaying
            audio.volume = volume
          }}
        ></audio>
        <p
          onClick={changeState}
          className={masterPlaying ? styles.cardText : styles.cardTextPlaying}
        >
          {name}
        </p>
      </div>
    </div>
  )
}
