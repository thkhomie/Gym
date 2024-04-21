import YogaCard from "../card/YogaCard";
import Footer from "../component/Footer";
import SocialMedia from "../component/SocialMedia";
import { YOGA } from "../data/Data";
import { Link } from "react-router-dom";
import Picture5 from '../assets/Picture5.png'

export default function Yoga() {
    return (
        <>
            <div className="bg-overallBG">
                <img src={Picture5} alt="logo" className="w-full" />
                <h2 className="font-bold text-2xl md:text-4xl text-center text-paragraph">Yoga</h2>
                <div className="text-center p-14">
                    <h3 className="text-yeellow font-semibold md:text-2xl p-4 m-6">Our classes are designed to provide a welcoming and safe space for all levels to explore the practice of yoga, breath-work, and meditation. Whether you’re a seasoned yogi or just starting out, you’ll find our classes to be both challenging and enriching.</h3>
                    <button className="team m-3">
                        <Link to='/schedule'>
                            SEE SCHEDULE
                        </Link>
                    </button>
                </div>
                <div className="">
                    {YOGA.map((item) => (
                        <YogaCard
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