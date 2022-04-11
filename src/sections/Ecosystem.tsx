import bull_logo from '../assets/images/bull_logo.svg'
import line from '../assets/images/line.svg'

export default function Ecosystem() {
    return (
        <div className="bg-black px-20 flex flex-row items-center justify-between">
            <div className='px-16 flex flex-col items-center justify-center'>
                <img src={bull_logo} width={360} height={360}></img>
            </div>
            <div className='z-10 max-w-3xl flex flex-col items-start space-y-6'>
                <div className='text-4xl font-black text-green'>BULL SOLANA ECOSYSTEM</div>
                <div className='text-2xl text-white'>Bull Solana is a community token built on the Solana blockchain ecosystem with a limited supply of 10 billion tokens.</div>
                <div className='text-2xl text-white'>$BULL is a project with the goal of becoming the largest operational platform in DeFi and the crypto-space as a whole, building a competitive crypto ecosystem.</div>
                <div className='text-2xl text-white'><span className='text-green'>Vision:</span> We aim to become a Solana ambasador for positive news and also serve as a bull eye, watching over every other token and NFTs in the blockchain.</div>
                <div className='text-2xl text-white'><span className='text-green'>Mission: </span> Our mission is to build a cooperative community and social token on the Solana blockchain. We’re building a system that helps users get easy access to the crypto world.
                    In the long run, we will be building easy-to-understand services that anyone (crypto experts/novice) can use to trade tokens and NFTs on Solana, learn about the blockchain industry, and DeFi, while avoiding dangerous schemes within the space.
                </div>
                <img className='pt-4' src={line}></img>
            </div>
        </div>
    )
}