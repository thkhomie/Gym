import { Link } from "react-router-dom";
import ClassSlide from "./ClassSlide";

export default function Class() {
    return (
        <section id="class" className="bg-overallBG py-32 mx-auto">
            <div className="">
                <h3 className="text-yellow-400 text-4xl font-semibold text-center mb-10 pt-5">Our Classes</h3>
                <p className="text-paragraph md:text-2xl text-center p-3">At Elevate Elite there are no limits to what you can accomplish. We offer a world-class customer experience and high-quality training environment for every level – from beginners to professionals, no matter your age or experience, we have the class for you.</p>
                <ClassSlide />
            </div>
            <div className="flex justify-center items-center">
                <a href='/membership'>
                    <button className="link ">Join Now</button>
                </a>
                
            </div>

        </section>
    )
}

{/* <div className="flex min-h-screen flex-col items-center justify-center">
<div className="group h-96 w-96 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">

        <div className="absolute inset-0">
            <img src={Front} alt="" className="h-full w-full rounded-xl object-cover shadow-xl " />
        </div>

        <div className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
                <img src={Back} alt="" className="h-full w-full rounded-xl object-cover shadow-xl " />

                <button className="border text-slate-100">Learn More</button>
            </div>

        </div>
    </div>
</div>
</div> */}