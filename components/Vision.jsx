import Image from 'next/image';
import Astro from '../public/vision/Astronaut.webp';
import Rocket from '../public/vision/rocket.webp';

export default function Vision() {
  return (
    <div className="bg-vision p-8 ">
    <div>
        <Image src={Rocket} alt="rocket" />
        </div>    
    <Image src={Astro}  alt="astro"/>
    
    <div className=" text-white ">
        
      <h1 className="text-4xl pb-4 font-bold">Vision</h1>
      <p className="text-xl ">
        Galaxy Guild’s mission is to accelerate the transition of games towards
        a decentralised future. Galaxy Guild is committed to enhancing the gamer
        experience and continuously pushing the boundary between the real world
        and Metaverse. By empowering players and investors towards an openly
        accessible, independent and decentralised marketplace.
      </p>
    </div>
    </div>
  );
}
