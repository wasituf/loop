import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Controls from '../components/Controls'
import EffectCard from '../components/EffectCard'
import InstallScreen from '../components/InstallScreen'
import { useState, useEffect } from 'react'
import InfoTab from '../components/InfoTab'
import { rippleEffect } from '../lib/functions'

export default function HomePage() {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(null)
  const [bipEvent, setBipEvent] = useState(null)
  const SFX = [
    { 'name': 'Rain', 'filename': 'rain.mp3' },
    { 'name': 'Fire', 'filename': 'fire.mp3' },
    { 'name': 'Cricket', 'filename': 'cricket.mp3' },
    { 'name': 'Birds', 'filename': 'birds.ogg' },
    { 'name': 'Water', 'filename': 'water.ogg' },
    { 'name': 'Waves', 'filename': 'waves.ogg' },
    { 'name': 'Cicadas', 'filename': 'cicada.ogg' },
  ]

  useEffect(() => {
    if (localStorage.getItem('volume') !== null) {
      setVolume(localStorage.getItem('volume'))
    } else {
      localStorage.setItem('volume', '0.5')
      setVolume(localStorage.getItem('volume'))
    }

    // bipEvent
    if (bipEvent === null) {
      window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault()
        setBipEvent(e)
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (volume !== null) {
      localStorage.setItem('volume', volume)
    }
  }, [volume])

  const updateVolume = e => {
    setVolume(e.target.value)
  }

  const handlePlayState = e => {
    if (playing) {
      setPlaying(false)
    } else {
      setPlaying(true)
    }
  }

  const installPrompt = e => {
    rippleEffect(e)

    if (bipEvent) {
      bipEvent.prompt()
    } else {
      console.log(
        "To install the app look for Add to Homescreen or Install in your browser's menu",
      )
    }
  }

  return (
    <>
      <Head>
        <title>Loop</title>
        <meta name='description' content='Relax. Rewind. Repeat.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <InstallScreen installPrompt={installPrompt} />

      <Header updateVolume={updateVolume} volume={volume} playing={playing} />

      <InfoTab />

      <main className={styles.parentContainer}>
        <div className={styles.container}>
          {SFX.length &&
            SFX.map((sfx, index) => {
              return (
                <EffectCard
                  key={index}
                  name={sfx.name}
                  filename={sfx.filename}
                  masterPlaying={playing}
                  volume={volume}
                />
              )
            })}
        </div>
      </main>

      <Controls
        playing={playing}
        switchPlayState={handlePlayState}
        volume={volume}
        updateVolume={updateVolume}
      />
    </>
  )
}
