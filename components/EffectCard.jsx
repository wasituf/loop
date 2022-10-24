import styles from '../styles/EffectCard.module.css'
import { useEffect, useState } from 'react'

export default function EffectCard({
  name,
  masterPlaying,
  volume,
  filename,
  presets,
}) {
  const [playing, setPlaying] = useState(false)
  const [effectVolume, setEffectVolume] = useState(0.5)

  useEffect(() => {
    if (localStorage.getItem(name.toLowerCase()) === null) {
      localStorage.setItem(name.toLowerCase(), effectVolume)
    } else {
      setEffectVolume(localStorage.getItem(name.toLowerCase()))
    }
  }, [name]) // eslint-disable-line react-hooks/exhaustive-deps

  const changeState = e => {
    // if(localStorage.getItem('presetActive') === true) {
    //   presets.map(prst => {
    //     const preset = document.getElementById(prst.name.toLowerCase())

    //   })
    // }

    const audio = e.target.querySelector('audio')
    if (audio) {
      audio.muted = !masterPlaying
      audio.volume = (effectVolume / 100) * (volume * 100)
      if (audio.paused) {
        console.log('playing audio...')
        audio.play()
        setPlaying(true)
      } else if (!audio.paused) {
        console.log('pausing...')
        audio.pause()
        setPlaying(false)
      }
    }
  }

  return (
    <div className={styles.parentDiv}>
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

        <audio
          id={'effect-' + name.toLowerCase()}
          src={`/audio/${filename}`}
          onTimeUpdate={e => {
            const audio = e.target
            if (audio.currentTime > audio.duration - 0.4) {
              audio.currentTime = 0
              audio.play()
            }
            audio.muted = !masterPlaying
            audio.volume =
              (localStorage.getItem(name.toLowerCase()) / 100) * (volume * 100)
          }}
        ></audio>
        <p
          onClick={changeState}
          className={!playing ? styles.cardText : styles.cardTextPlaying}
        >
          {name}
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <input
          id={'slider-' + name.toLowerCase()}
          className={styles.slider}
          type='range'
          min={'0'}
          max={'1'}
          step={'0.01'}
          value={effectVolume}
          onChange={e => {
            setEffectVolume(e.target.value)
            localStorage.setItem(name.toLowerCase(), e.target.value)
          }}
          controls
        />
      </div>
    </div>
  )
}
