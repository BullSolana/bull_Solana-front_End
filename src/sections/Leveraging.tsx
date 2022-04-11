import leveraging from '../assets/images/leveraging.png'
import LeverageItem from '../components/LeverageItem'
import litepaper from '../assets/images/litepaper.svg'
import watch from '../assets/images/watch.svg'
import dex from '../assets/images/dex.svg'
import game from '../assets/images/game.svg'

export default function Leveraging() {
    return (
        <div className="mt-10 md:-mt-10 lg:-mt-32 z-0 relative bg-none lg:bg-leveraging bg-cover bg-no-repeat h-full md:h-screen">
            <div className='relative md:absolute bottom-0 w-full flex flex-col justify-center items-center space-y-6'>
                <div className='text-2xl sm:text-5xl font-bold text-center'>Leveraging the Power of Meme Community</div>
                <div className='max-w-3xl text-base sm:text-2xl text-gray font-bold text-center'>
                    Innovation and expansion are key factors in the crypto space. $BULL stand to create a new economic model with a strong approach to DeFi and Web 3.0.
                </div>
                <div className='py-10 px-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center'>
                    <LeverageItem image={<img src={litepaper}></img>} title1='$BULL' title2='Litepaper'></LeverageItem>
                    <LeverageItem image={<img src={watch}></img>} title1='$BULL' title2='Bull Watch'></LeverageItem>
                    <LeverageItem image={<img src={dex}></img>} title1='$BULL' title2='Swap Dex'></LeverageItem>
                    <LeverageItem image={<img src={game}></img>} title1='$BULL' title2='P2E NFT Game'></LeverageItem>
                </div>
            </div>
        </div>
    )
}