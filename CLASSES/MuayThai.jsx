import { Link } from "react-router-dom";
import MuayThaiCard from "../card/MuayThaiCard";
import Footer from "../component/Footer";
import SocialMedia from "../component/SocialMedia";
import { MUAYTHAI } from "../data/Data";
import Picture1 from '../assets/Picture1.png'

export default function MuayThai() {
    return (
        <>
            <div className="bg-overallBG">
                <img src={Picture1} alt="logo" className="w-full" />
                <h2 className="font-bold text-2xl md:text-4xl text-center text-paragraph">Muay Thai</h2>
                <div className="text-center p-10 ">
                    
                    <h3 className="text-yeellow font-semibold md:text-2xl p-4 m-6">The national sport of Thailand, also known as “Thai Boxing” is a striking art that utilizes punching, kicking, kneeing, and elbowing. Join our experienced trainers and learn the art of authentic Muay Thai through traditional teachings with modern techniques and instruction.</h3>
                    <Link to='/schedule' className="team">
                        SEE SCHEDULE
                    </Link>
                </div>
                <div className="">
                    {MUAYTHAI.map((item) => (
                        <MuayThaiCard
                            key={item.title}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            description={item.description} />
                    ))}
                </div>
            </div>
            <SocialMedia />
            <Footer />
        </>

    )
}