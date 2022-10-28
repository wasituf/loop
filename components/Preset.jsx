import { useEffect, useState } from 'react'
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
      localStorage.setItem(id, true)
    } else {
      localStorage.setItem(id, false)
    }
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePreset = e => {
    if (localStorage.getItem(id) === 'false') {
      let allEffects = document.querySelectorAll('[id^="effect-"]')
      const presetEffects = effects.map(effect => effect.split('.')[0])

      allEffects.forEach(effect => {
        const effectName = effect.id.split('-')[1]

        if (!presetEffects.includes(effectName)) {
          if (localStorage.getItem(effectName + 'Playing') === 'true') {
            effect.parentElement.click()
          }
        }
      })
    }

    effects.forEach(effect => {
      const sfxId = effect.split('.')[0]
      const sfxVolume = effect.split('.')[1]
      const sfx = document.getElementById('effect-' + sfxId)

      localStorage.setItem(sfxId, +sfxVolume / 100)

      if (!active) {
        if (localStorage.getItem(sfxId + 'Playing') === 'false') {
          sfx.parentElement.click()
        }
      } else if (active) {
        if (localStorage.getItem(sfxId + 'Playing') === 'true') {
          sfx.parentElement.click()
        }
      }
    })

    setActive(!active)
  }

  return (
    <div id={id} onClick={handlePreset} className={styles.preset}>
      {name}
    </div>
  )
}
