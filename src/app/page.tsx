import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './style/page.module.css'
import {
  About,
  Explore,
  Feedback,
  Footer,
  GetStarted,
  Hero,
  Insights,
  NavBar,
  WhatsNew,
  World
} from './components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  )
}
