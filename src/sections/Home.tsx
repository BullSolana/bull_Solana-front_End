import bull_logo from '../assets/images/bull_logo.svg'
import bull from '../assets/images/bull.svg'
import bull_dark from '../assets/images/bull_dark.svg'

export default function Home() {
    return (
        <div className='px-32 py-40 relative bg-black flex flex-row items-center place-content-between'>
            <div className='max-w-2xl flex flex-col items-start space-y-6'>
                <div className="text-white text-4xl font-black">Building the next big community on Solana blockchain</div>
                <div className="text-gray text-2xl">
                    Collaboration is the new competition
                    Together, let’s grow the <span className="text-purple">block</span> a <span className="text-green">chain</span> at a time!
                </div>
                <div className="rounded-full p-2 border border-purple flex flex-row items-center">
                    <img src={bull_logo}></img>
                    <div className='px-6 text-4xl font-bold text-white'>How to buy</div>
                </div>
            </div>
            <img className='hidden md:block absolute top-40 right-32 mix-blend-screen' src={bull}></img>
            <img className='md:hidden absolute mix-blend-screen' src={bull_dark}></img>
        </div>
    )
}