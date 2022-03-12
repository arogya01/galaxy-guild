import Image from 'next/image';
import Bg from '../public/bgpic.png';
import GlowingBtn from '../utils/glowingBtn';
import CardsWrapper from './CardsWrapper';



const BackgroundImg = () => {
    return(
        <div className='absolute -z-1 w-full h-full'>
        <Image src={Bg}  layout="fill" objectFit='cover' alt="bg"  />
        <style jsx>{
            `
            div{
                z-index:-1;
            }
                
            `
        }
        </style>
        </div>
    )
}

export default function HeroSection (){
    return(
        <div className='relative z-5 h-[932px]'>
        <BackgroundImg />
        <div className=" pb-16">
        <section className=" z-5 text-white p-8 text-center">
        <h1 className='text-3xl leading-7 pb-6 font-header'>BRING THE GAME</h1>
        <p className='font-extralight text-lg leading-8 font-paraTwo'>Galaxy Guild serves as the platform for Players, Guilds, and Scholarship Managers to collaborate and make the most out of their Metaverse experience! </p>
        </section>

        <div className="grid place-content-center">
        <GlowingBtn btnName="Read Whitepaper"/>

        </div>

        </div>

        <CardsWrapper />
        </div>
    )
}