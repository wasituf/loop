import styles from '../styles/EffectCard.module.css'
import { useEffect, useState } from 'react'

export default function EffectCard({
  name,
  masterPlaying,
  volume,
  filename,
  eqState,
}) {
  const [playing, setPlaying] = useState(false)
  const [effectVolume, setEffectVolume] = useState(0.5)

  useEffect(() => {
    if (localStorage.getItem(filename) === null) {
      localStorage.setItem(filename, effectVolume)
    } else {
      setEffectVolume(localStorage.getItem(filename))
    }
  }, [])

  const changeState = e => {
    const audio = e.target.querySelector('audio')
    if (audio) {
      audio.muted = !masterPlaying
      audio.volume = (effectVolume / 100) * (volume * 100)
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
      <div
        onClick={changeState}
        className={playing ? styles.cardPlaying : styles.card}
      >
        {playing && (
          <div
            className={styles.before}
            style={{ bottom: `${effectVolume * 100 + 5}%` }}
          ></div>
        )}

        {playing && (
          <div
            className={styles.after}
            style={{ bottom: `${effectVolume * 100}%` }}
          ></div>
        )}

        <div className={styles.sliderContainer}>
          <input
            className={styles.slider}
            type='range'
            min={'0'}
            max={'1'}
            step={'0.01'}
            value={effectVolume}
            onChange={e => {
              setEffectVolume(e.target.value)
              localStorage.setItem(filename, e.target.value)
            }}
            controls
            style={{
              zIndex: '2000',
              pointerEvents: `${eqState && playing ? 'all' : 'none'}`,
            }}
          />
        </div>

        <audio
          src={`/audio/${filename}`}
          onTimeUpdate={e => {
            const audio = e.target
            if (audio.currentTime > audio.duration - 0.4) {
              audio.currentTime = 0
              audio.play()
            }
            audio.muted = !masterPlaying
            audio.volume = (effectVolume / 100) * (volume * 100)
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
