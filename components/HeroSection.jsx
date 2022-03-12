import Image from 'next/image';
import Bg from '../public/bgpic.png';
import GlowingBtn from '../utils/glowingBtn';


const BackgroundImg = () => {
    return(
        <div className='absolute -z-1 w-full h-full'>
        <Image src={Bg}  layout="fill" objectFit='cover' alt="bg"  />
        </div>
    )
}

export default function HeroSection (){
    return(
        <div className='relative  h-[932px]'>
        <BackgroundImg />
        <section className=" z-5 text-white p-8 text-center">
        <h1 className='text-3xl leading-7 pb-6'>BRING THE GAME</h1>
        <p className='font-extralight text-lg leading-8 '>Galaxy Guild serves as the platform for Players, Guilds, and Scholarship Managers to collaborate and make the most out of their Metaverse experience! </p>
        </section>

        <div className="grid place-content-center">
        <GlowingBtn btnName="Read Whitepaper"/>

        </div>
        </div>
    )
}