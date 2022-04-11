import { useState, useEffect } from 'react'
import arrow from '../assets/images/arrow.svg'

interface FaqItemProps {
    title: string,
    content: any
}

export default function FaqItem({ title, content }: FaqItemProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full rounded-2xl px-10 border border-purple flex flex-col" onClick={() => setOpen(!open)}>
            <div className='py-10 flex flex-row items-center justify-between'>
                <div className="text-white text-5xl font-black">{title}</div>
                <img src={arrow}></img>
            </div>
            {
                open && (
                    <div className='pb-6 text-2xl text-white'>
                        {content}
                    </div>
                )
            }
        </div>
    )
}