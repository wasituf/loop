import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Controls from '../components/Controls'
import EffectCard from '../components/EffectCard'
import { useState, useEffect } from 'react'
import InfoTab from '../components/InfoTab'

export default function HomePage() {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(null)
  const [eqState, setEqState] = useState(false)
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
  }, [])

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

  const updateEqState = () => {
    setEqState(!eqState)
  }

  return (
    <>
      <Head>
        <title>Loop</title>
        <meta name='description' content='Relax. Rewind. Repeat.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='install-bg'>
        <button className='install-btn'>Install</button>
      </div>

      <Header
        updateVolume={updateVolume}
        volume={volume}
        playing={playing}
        eqState={eqState}
      />

      <InfoTab eqState={eqState} />

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
                  eqState={eqState}
                />
              )
            })}
        </div>
      </main>

      <Controls
        playing={playing}
        switchPlayState={handlePlayState}
        eqState={eqState}
        updateEqState={updateEqState}
      />
    </>
  )
}
