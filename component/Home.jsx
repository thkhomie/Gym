import Video from '../assets/0324.mov'
import About from './About'
import Class from './Class'
import Footer from './Footer'
import Gallery from './Gallery'
import NewsLetter from './NewsLetter'
import SocialMedia from './SocialMedia'
import Store from './Store'
import Team from './Team'
import Testimonal from './Testimonal'
import Picture1 from '../assets/Picture1.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="flex flex-col-reverse items-center mx-auto py-64 px-6 relative h-screen ">
                <div className="absolute inset-0 ">
                    <video src={Video} autoPlay loop muted className='w-screen h-screen object-cover'></video>
                </div>


                <div className='absolute flex flex-col justify-center items-center '>
                    <img src={Picture1} alt="logo" className='size-96 w-full h-full' />
                    <h2 className='text-heading font-semibold text-2xl p-2 text-center'>"Unlock Your Strength: Embark on Your Fitness Odyssey!"</h2>
                    <a href='/membership'>
                        <button className="link">Join now</button>
                    </a>
                </div>
            </section>
            <About />
            <Class />
            <Store />
            <Team />
            <Gallery />
            <Testimonal />
            <NewsLetter />
            <SocialMedia />
            <Footer />

        </>

    )
}