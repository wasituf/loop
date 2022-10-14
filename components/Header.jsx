import Image from 'next/image'
import styles from '../styles/Header.module.css'
import VolumeBar from './VolumeBar'

export default function Header({ updateVolume, volume, playing }) {
  return (
    <header className={styles.headerContainer}>
      <Image src='/logo_white_outline.png' alt='' width={119} height={97} />
      <VolumeBar
        updateVolume={updateVolume}
        volume={volume}
        playing={playing}
      />
    </header>
  )
}
