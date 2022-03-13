
import imageOne from '../public/games/one.webp';
import imageTwo from '../public/games/two.webp';
import imageThree from '../public/games/three.webp';
import imageFour from '../public/games/four.webp';
import imageFive from '../public/games/five.webp';
import imageSix from '../public/games/six.webp';
import GamesCard from './GamesCard';

const gamesList = [
   
    {
        imgSrc:imageOne,
        gameName:"Syn City"
    },
    {
        imgSrc:imageTwo,
        gameName:"Elfin Kingdom"
    },
    {
        imgSrc:imageThree,
        gameName:"Vulcan Verse"
    },
    {
        imgSrc:imageFour,
        gameName:"Mixmob"
    },
    {
        imgSrc:imageFive,
        gameName:"Big Time"
    },
    {
        imgSrc:imageSix,
        gameName:"Axie Infinity"
    }

]

export default function GamesList(){
    return(
    <div className="bg-vision p-12">
    <div className="flex flex-col items-center text-center">
        <h1 className="font-header text-3xl pb-8">Games We Are Playing</h1>
        <p className="font-fontJost ">Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.</p>
    </div>

    <div className='flex flex-col items-center lg:grid lg:grid-cols-3'>
        {
            gamesList.map(el=>{
                return(
                    <GamesCard imgSrc={el.imgSrc} gameName={el.gameName} key={el.gameName} />
                )
            })
        }
    </div>
    </div>
    )
}