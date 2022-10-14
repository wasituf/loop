import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Controls from '../components/Controls'
import EffectCard from '../components/EffectCard'
import VolumeBar from '../components/VolumeBar'
import { useState, useEffect } from 'react'

export default function HomePage({ data }) {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(null)
  const [eqState, setEqState] = useState(false)
  const SFX = data

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

      <Header updateVolume={updateVolume} volume={volume} playing={playing} />

      <main className={styles.parentContainer}>
        <div
          className={styles.alert}
          style={{ visibility: eqState ? 'visible' : 'hidden' }}
        >
          EQ Mode
        </div>
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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api', {
    method: 'GET',
  })

  const data = await res.json()

  return {
    props: { data },
  }
}
