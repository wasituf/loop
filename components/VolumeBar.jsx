import { useEffect, useState } from 'react'
import styles from '../styles/VolumeBar.module.css'

export default function VolumeBar({ volume, updateVolume, playing }) {
  const [sliderThumbPos, setSliderThumbPos] = useState(null)

  useEffect(() => {
    const localVolume = localStorage.getItem('volume')
    let pos

    if (localVolume !== null) {
      pos = (window.innerWidth / 100) * (+localVolume * 100)
    } else {
      pos = (window.innerWidth / 100) * 50
    }

    setSliderThumbPos(pos)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      const localVolume = localStorage.getItem('volume')
      let pos

      if (localVolume !== null) {
        pos = (window.innerWidth / 100) * (+localVolume * 100)
      } else {
        pos = (window.innerWidth / 100) * 50
      }

      setSliderThumbPos(pos)
    })
  })

  const calculateSliderThumbPos = e => {
    const pos = (window.innerWidth / 100) * (e.target.value * 100)
    setSliderThumbPos(pos)
  }

  return (
    <div className={styles.slidecontainer}>
      <div
        className={playing ? styles.sliderThumbPlaying : styles.sliderThumb}
        style={{ width: `${sliderThumbPos}px` }}
      ></div>
      <input
        className={playing ? styles.sliderPlaying : styles.slider}
        type='range'
        min='0'
        max='1'
        value={volume || 0.5}
        step='0.01'
        onChange={e => {
          updateVolume(e)
          calculateSliderThumbPos(e)
        }}
      />
    </div>
  )
}
