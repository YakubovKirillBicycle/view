'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../../style'
import { navVariants } from '../../utils/motion'

export const NavBar = () => {
  return ( 
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Image
          src={require('../../public/search.svg')}
          alt="Search"
          className='w-[24px] h-[24px] object-contain'
        />

        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          View
        </h2>

        <Image
          src={require('../../public/menu.svg')}
          alt="Menu"
          className='w-[24px] h-[24px] object-contain'
        />
      </div>
    </motion.nav>
   );
}