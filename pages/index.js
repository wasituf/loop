import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Controls from '../components/Controls'
import EffectCard from '../components/EffectCard'
import VolumeBar from '../components/VolumeBar'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [playing, setPlaying] = useState(true)
  const SFX = [
    { name: 'Rain', filename: 'rain' },
    { name: 'Fire', filename: 'fire' },
    { name: 'Cricket', filename: 'cricket' },
    { name: 'White Noise', filename: 'white-noise' },
  ]
  const [volume, setVolume] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('volume') !== null)
      setVolume(localStorage.getItem('volume'))
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

  return (
    <>
      <Head>
        <title>Loop</title>
        <meta name='description' content='Relax. Rewind. Repeat.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <VolumeBar
        volume={volume}
        updateVolume={updateVolume}
        playing={playing}
      />

      <main className={styles.parentContainer}>
        <div className={styles.container}>
          {SFX.map((sfx, index) => {
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

      <Controls playing={playing} switchPlayState={handlePlayState} />
    </>
  )
}
