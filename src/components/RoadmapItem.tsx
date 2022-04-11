import circle from '../assets/images/circle.svg'

interface RoadmapItemProps {
    title: string,
    content: string[]
}

export default function RoadmapItem({ title, content }: RoadmapItemProps) {
    return (
        <div className="rounded-2xl p-10 flex flex-col space-y-4" style={{ boxShadow: '0px 10px 20px 0px #00000026' }}>
            <div className="text-xl">{title}</div>
            <img width={60} height={60} src={circle}></img>
            <ul className='list-outside'>
                {
                    content.map((item, index) => (
                        <li key={index} className='text-xs'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}