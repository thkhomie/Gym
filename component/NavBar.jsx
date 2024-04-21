import { useState } from 'react'
import Logo from '../assets/Logo.png'
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri'
import MobileNavBar from './MobileNavBar'
import Dropdown from '../dropdown/Dropdown'
export default function NavBar() {

    const [isOpened, setIsOpened] = useState(false)
    return (
        <>
            {isOpened && <MobileNavBar  setIsOpened={setIsOpened} />}
            <div className="bg-overallBG sticky top-0 z-10">

                <nav className="w-full mx-auto py-4 px-6">
                    <div className="flex justify-between items-center">
                        <a href="/">
                            <img src={Logo} alt="logo" className='w-24 h-12' />
                        </a>
                        

                        <ul className="hidden list-none md:flex gap-14">
                            <li>
                                <a href="/" className='menu-item'>Home</a>
                            </li>
                            <li>
                               <a href="/aboutUs" className='menu-item'>About Us</a>
                            </li>
                            <li className='menu-item'>
                                {<Dropdown />}
                            </li>
                            <li>
                                <a href="/shop" className='menu-item'>Store</a>
                            </li>
                            <li className=''>
                                <a href='/membership' className="book" >Book Now</a>
                            </li>
                        </ul>
                        
                        <button onClick={() => {setIsOpened(true)}} className="bg-heading w-10 h-10 text-2xl flex justify-center items-center rounded md:hidden">
                            {isOpened ? <RiCloseFill /> : <RiMenu4Line />}
                        </button>
                    </div>
                </nav>
            </div>
        </>

    )
}