import { Link } from "react-router-dom";

export default function About() {
    return (
        <section id="about" className="bg-overallBG py-32 mx-auto">

            <div className="flex flex-col justify-center items-center text-center">
                <h3 className=" text-yellow-400 text-4xl font-semibold  mb-10 pt-5">Elevate Elite</h3>
                <p className="text-glow-pink text-4xl font-bold p-2">
                    Elevate Elite is the #1 MMA, Muay Thai, and Fitness camp.
                </p>
                <p className="text-paragraph md:text-2xl m-3 p-6 leading-8">
                    We offer the highest quality training over a wide range of disciplines including Muay Thai, MMA, Brazilian Jiu-Jitsu (BJJ), no-gi submission grappling, wrestling, strength & conditioning and fitness.
                    We provide a world-class customer experience and an unintimidating and friendly training environment for every level. From beginners to professionals, this is your home gym away from home.
                </p>

                <div className="flex justify-center items-center py-12">
                    <a href='/aboutUs'>
                        <div className=" box relative w-[190px] h-[55px] bg-[#020223] overflow-hidden"></div>
                    </a>
                </div>
            </div>
        </section>
    )
}