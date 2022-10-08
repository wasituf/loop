import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image src='/logo_white_outline.png' alt='' width={119} height={97} />
    </header>
  )
}
