import Slider from "react-slick";
import TestimonalCard from "../card/TestimonalCard";
import { TESTIMONALS } from "../data/Data";
import { useState, useRef } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

export default function Testimonal() {

    const sliderRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0)

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ], beforeChange: (index) => {
            setCurrentSlide(index);
        }
    };

    function slideRight() {
        sliderRef.current.slickNext();
    }

    function slideLeft() {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="bg-overallBG py-16 mx-auto">
            <h3 className="text-yellow-400 text-4xl font-semibold text-center  mb-10 pt-5">TESTIMONALS</h3>

            <div className="relative mb-7 px-5 md:px-10">
                <Slider ref={sliderRef} {...setting}>
                    {TESTIMONALS.map((item) => (
                        <TestimonalCard
                            key={item.id}
                            imgUrl={item.imgUrl}
                            name={item.name}
                            description={item.description} />
                    ))}
                </Slider>
                
                <button className="arrow-btn left-1 md:left-5 lg:left-2" onClick={slideLeft}>
                    <RiArrowLeftSLine size={24} />
                </button>

                <button className="arrow-btn right-1 md:right-5 lg:right-2" onClick={slideRight}>
                    <RiArrowRightSLine size={24} />
                </button>
            </div>
        </div>
    )
}