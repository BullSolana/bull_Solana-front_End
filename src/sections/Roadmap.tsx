import circle from '../assets/images/circle.svg'
import RoadmapItem from '../components/RoadmapItem';

const q2 = [
    'Token Launch',
    'Website launch',
    'Feasibility breakdown',
    'Coingecko/Coinmarketcap listing',
    'Marketing/Partnership',
    'Introducing Bullwatch'
];

const q3 = [
    'Launch Bullwatch',
    'Airdrop distribution',
    'Team development',
    'Contest and games',
    'NFT launch',
    'P2E game development'
]

const q4 = [
    'UI/UX redesign',
    'Mockup design',
    'Beta Test',
    'Community engagement',
    'Public test',
    'Bullswap Launch',
    'Update...'
]

export default function Roadmap() {
    return (
        <div className="py-10 w-full flex flex-col items-center justify-center" style={{backgroundColor: '#FAFAFA'}}>
            <div className="py-10 text-5xl font-bold">ROADMAP</div>
            <div className="w-full px-10 grid grid-cols-3 space-x-20 items-center justify-between">
                <RoadmapItem title='Q2 2022' content={q2}></RoadmapItem>
                <RoadmapItem title='Q3 2022' content={q3}></RoadmapItem>
                <RoadmapItem title='Q4 2022' content={q4}></RoadmapItem>
            </div>
        </div>
    )
}