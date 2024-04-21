import { Link } from "react-router-dom";

export default function ClassCard({ imgUrl, path, backImgUrl, title }) {
    return (
        <div className="flex flex-col items-center justify-center">

            <div className="group w-full h-44 lg:h-[30rem] lg:w-full md:w-full md:h-64 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">

                    <div className="absolute inset-0">
                        <img src={imgUrl} alt={title} className="w-full h-full rounded-xl shadow-xl mb-4 p-2" />
                    </div>

                    <div className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

                        <img src={backImgUrl} alt={title} className="h-full w-full rounded-xl shadow-xl mb-4 p-2" />
                        <button className="absolute inset-0 flex items-center justify-center" >
                            <a href={path} className="learn">
                                Learn More
                            </a>
                        </button>
                    </div>
                </div>
            </div>


            <div>
                <h4 className="text-heading text-center text-sm font-medium md:text-base mb-1">{title}</h4>
            </div>
        </div>
    )
}
