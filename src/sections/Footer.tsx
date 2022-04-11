import dexlab from '../assets/images/dexlab.svg'
import coingecko from '../assets/images/coingecko.svg'
import raydium from '../assets/images/raydium.svg'
import coinmarketcap from '../assets/images/coinmarketcap.svg'
import jupiter from '../assets/images/jupiter.svg'

export default function Footer() {
    return (
        <div className="bg-green px-10 py-16 flex flex-row items-center justify-between flex-wrap">
            <img src={dexlab}></img>
            <img src={coingecko}></img>
            <img src={raydium}></img>
            <img src={coinmarketcap}></img>
            <img src={jupiter}></img>
        </div>
    )
}