import Image from 'next/image'
import styles from '../styles/Header.module.css'
import VolumeBar from './VolumeBar'

export default function Header({ updateVolume, volume, playing, eqState }) {
  return (
    <header className={styles.headerContainer}>
      <Image src='/logo.png' alt='' width={119} height={34} />
      <VolumeBar
        updateVolume={updateVolume}
        volume={volume}
        playing={playing}
      />
    </header>
  )
}
