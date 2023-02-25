import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './style/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Hello !!!!</div>
    </main>
  )
}
