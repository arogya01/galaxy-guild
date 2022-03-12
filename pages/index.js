import Head from 'next/head'
import Image from 'next/image'
import CardsWrapper from '../components/CardsWrapper'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <Navbar />
     <HeroSection />
     
    </>
  )
}
