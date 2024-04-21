import FitCard from "../card/FitCard";
import Footer from "../component/Footer";
import SocialMedia from "../component/SocialMedia";
import { FIT } from "../data/Data";
import { Link } from 'react-router-dom'
import Picture2 from '../assets/Picture2.png'

export default function Fit() {
    return (
        <>
            <div className="bg-overallBG">
                <img src={Picture2} alt="logo" className="w-full" />
                <h2 className="font-bold text-2xl md:text-4xl text-center p-3 text-paragraph">Elite Fit</h2>
                <div className="text-center p-12">
                    <h3 className="text-yeellow font-semibold md:text-2xl p-3 m-6">Elevate Elite Fit classes are the perfect start to your day. High Intensity Interval Training to jack up your endorphins and improve your conditioning first thing in the morning. The classes have a range of benefits including weight loss, building muscle and levelling up your fight ready conditioning if you’re an athlete.</h3>
                    <button className="team">
                        <Link to='/schedule'>
                            SEE SCHEDULE
                        </Link>
                    </button>
                </div>
                <div className="">
                    {FIT.map((item) => (
                        <FitCard
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