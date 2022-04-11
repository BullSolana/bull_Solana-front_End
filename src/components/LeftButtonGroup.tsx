import telegram from '../assets/images/telegram.png'
import twitter from '../assets/images/twitter.png'
import discord from '../assets/images/discord.png'

export default function LeftButtonGroup() {
    return (
        <div className="h-0 pl-4 flex flex-col space-y-6 sticky top-64 z-20">
            <img className='hover:animate-bounce w-16' src={telegram}></img>
            <img className='hover:animate-bounce w-16' src={twitter}></img>
            <img className='hover:animate-bounce w-16' src={discord}></img>
        </div>
    )
}