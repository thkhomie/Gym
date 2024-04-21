import Logo from '../assets/Logo.png'
import Dropdown from '../dropdown/Dropdown'

export default function MobileNavBar({ setIsOpened }) {
    return (
        <div className="w-screen fixed top-0 z-20">

            <div className="w-1/2 h-screen flex flex-col p-8 bg-overallBG">
                <a href="/">
                    <img src={Logo} alt="logo" className=' w-24 h-14' />
                </a>
                

                <ul>
                    <li className='mb-5'>
                        <a href="/" className='menu-item'>Home</a>
                    </li>
                    <li className='mb-5'>
                        <a href="/aboutUs" className='menu-item'>About Us</a>
                    </li>
                    <li className='mb-5 menu-item'>
                        {<Dropdown />}
                    </li>
                    <li className='mb-5'>
                        <a href="/shop" className='menu-item'>Store</a>
                    </li>
                    <li className='mb-5'>
                        <a href='/membership' className="book" >Book Now</a>
                    </li>
                </ul>

                <div className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
                    onClick={() => {
                        setIsOpened(false)
                    }} />
            </div>

        </div>
    )
}