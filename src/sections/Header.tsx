import logo from '../assets/images/logo.svg'
import hambur from '../assets/images/hambur.svg'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-black px-4 sm:px-10 py-6 relative flex flex-row items-center justify-between sticky top-0 z-20">
            <img className='w-40 sm:w-60' src={logo}></img>
            <div className="hidden lg:flex flex-row items-center space-x-4">
                <div className='text-2xl text-white font-bold'>HOME</div>
                <div className='text-2xl text-white font-bold'>ECOSYSTEM</div>
                <div className='text-2xl text-white font-bold'>ROADMAP</div>
                <div className='text-2xl text-white font-bold'>TOKENOMICS</div>
                <div className='text-2xl text-white font-bold'>FAQS</div>
            </div>
            <img className='w-6 sm:w-10 lg:hidden' src={hambur} onClick={() => setOpen(!open)}></img>

            {
                open && (
                    <div className='absolute top-20 right-0 bg-black p-4 flex flex-col items-start'>
                        <div className='text-2xl text-white font-bold'>HOME</div>
                        <div className='text-2xl text-white font-bold'>ECOSYSTEM</div>
                        <div className='text-2xl text-white font-bold'>ROADMAP</div>
                        <div className='text-2xl text-white font-bold'>TOKENOMICS</div>
                        <div className='text-2xl text-white font-bold'>FAQS</div>
                    </div>
                )
            }
        </div>
    )
}