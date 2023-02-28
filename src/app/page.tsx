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
    <div className='bg-gray-700 overflow-hidden'>
      <NavBar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0' />
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='gradient-04 z-0' />
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className='gradient-04 z-0' />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}
