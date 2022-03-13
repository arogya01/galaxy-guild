import Head from 'next/head'
import Image from 'next/image'
import CardsWrapper from '../components/CardsWrapper'
import GamesList from '../components/GamesList'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Vision from '../components/Vision'

export default function Home() {
  return (
    <>
     <Navbar />
     <HeroSection />
     <Vision />
     <GamesList />
    </>
  )
}
