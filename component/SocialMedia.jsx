import Insta from '../assets/Insta.svg'
import Fb from '../assets/Fb.svg'
import YT from '../assets/YT.svg'
import Twitter from '../assets/Twitter.svg'


export default function SocialMedia() {
    return (
        <div>
            <div className=" flex justify-center gap-6 m-3">
                <img src={Insta} alt="insta" className='w-8 h-8' />
                <img src={Fb} alt="fb" className='w-8 h-8' />
                <img src={YT} alt="yt" className='w-8 h-8' />
                <img src={Twitter} alt="twitter" className='w-8 h-8' />
            </div>

            <h4 className='text-red-400 text-semibold text-center p-3'>FOLLOW US </h4>


            <div className="flex justify-between items-center">
                <nav className="mx-auto py-4 px-6 text-center">
                    <ul className=" list-none md:flex gap-14">
                        <li>
                            <a href="/" className="footer-menu-item" >Home</a>
                        </li>
                        <li>
                            <a href="/aboutUs" className="footer-menu-item" >About Us</a>
                        </li>
                        <li>
                            <a href="/shop" className="footer-menu-item" >Store</a>
                        </li>
                        <li>
                            <a href="/schedule" className="footer-menu-item" >Schedule</a>
                        </li>
                        <li>
                            <a href="/membership" className="footer-menu-item" >Join Now</a>
                        </li>
                    </ul>

                </nav>
            </div>

        </div>
    )
}