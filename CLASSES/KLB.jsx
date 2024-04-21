import KBCard from "../card/KBCard";
import Footer from "../component/Footer";
import SocialMedia from "../component/SocialMedia";
import { KB } from "../data/Data";
import { Link } from "react-router-dom";
import Picture4 from '../assets/Picture4.png'

export default function KLB() {
    return (
        <>
            <div className="bg-overallBG">
                <img src={Picture4} alt="logo" className="w-full" />
                <h2 className="font-bold text-2xl md:text-4xl text-center p-5 text-paragraph">Kettle Bell</h2>
                <div className="text-center p-14">
                    <h3 className="text-yeellow font-semibold md:text-2xl p-4 m-6">We put you through your paces with our kettlebell  and conditioning program. Designed to improve your strength, conditioning and power, each class emphasises the importance of technique and intensity to improve your performance.</h3>
                    <button className="team">
                        <Link to='/schedule'>
                            SEE SCHEDULE
                        </Link>
                    </button>
                </div>
                <div className="">
                    {KB.map((item) => (
                        <KBCard
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