import BJJCard from "../card/BJJCard";
import Footer from "../component/Footer";
import SocialMedia from "../component/SocialMedia";
import { BRAZILIANJJ } from "../data/Data";
import { Link } from "react-router-dom";
import Picture3 from '../assets/Picture3.png'

export default function BrazilJJ() {
    return (
        <>
            <div className="bg-overallBG">
                <img src={Picture3} alt="logo" className="w-full" />
                <h2 className="font-bold text-2xl md:text-4xl text-center p-10 text-paragraph">Brazilian Jiu-Jitsu</h2>
                <div className="text-center p-10">
                    
                    <h3 className="text-yeellow font-semibold md:text-2xl p-4 m-6">Our Brazilian Jiu-Jitsu program, including Gi and No-Gi classes are run by Black Belt Alex Schild. No matter your age or ability, our classes are friendly and un-intimidating, and will give you the tools to learn and improve your ground game positions, techniques, and skills.</h3>
                    <button className="team">
                        <Link to='/schedule'>
                            SEE SCHEDULE
                        </Link>
                    </button>
                </div>
                <div className="">
                    {BRAZILIANJJ.map((item) => (
                        <BJJCard
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