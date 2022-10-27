import { useEffect, useState } from 'react'
import { rippleEffect } from '../lib/functions'
import styles from '../styles/InfoTab.module.css'

export default function Preset({ id, name, effects }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const preset = document.getElementById(id)

    if (active) {
      preset.style.background = '#333333'
      preset.style.color = '#ededed'
      preset.style.boxShadow = 'var(--btn-shadow-secondary)'
    } else {
      preset.style.background = 'var(--card-color)'
      preset.style.color = '#333333'
      preset.style.boxShadow = 'var(--btn-shadow-primary)'
    }

    if (active) {
      localStorage.setItem('presetActive', true)
    } else {
      localStorage.setItem('presetActive', false)
    }
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePreset = e => {
    setActive(!active)

    effects.forEach(effect => {
      const sfxId = effect.split('.')[0]
      const sfxVolume = effect.split('.')[1]
      const sfx = document.getElementById('effect-' + sfxId)

      localStorage.setItem(sfxId, +sfxVolume / 100)
      sfx.parentElement.click()
    })
  }

  return (
    <div id={id} onClick={handlePreset} className={styles.preset}>
      {name}
    </div>
  )
}
