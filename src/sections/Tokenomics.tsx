import tokenomics from '../assets/images/tokenomics.svg'

export default function Tokenomics() {
    return (
        <div className="py-16 flex flex-col items-center bg-black">
            <div className="text-5xl text-green font-black">TOKENOMICS</div>
            <div className="px-10 py-16 grid grid-cols-2 items-center justify-center">
                <div className="flex flex-col space-y-6 pr-10">
                    <div className="text-4xl text-white font-black">Token Distribution</div>
                    <div className="text-2xl text-gray">
                        5% monthly token burn totalling 40% of the supply.<br />
                        Team will receive 30% of their distribution at launch while 70% will be vested over burn duration.
                    </div>
                </div>
                <div className='w-full flex flex-col items-end'>
                    <img src={tokenomics}></img>
                </div>
            </div>
        </div>
    )
}