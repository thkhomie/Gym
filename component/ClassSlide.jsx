import Slider from "react-slick"
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { CLASSES } from "../data/Data"
import ClassCard from "../card/ClassCard"
import { useRef } from "react"
import { useState } from "react"


export default function ClassSlide() {
    const sliderRef = useRef();
    const[currentSlide, setCurrentSlide] =useState(0);

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

    function slideRight(){
        sliderRef.current.slickNext();
    }

    function slideLeft(){
        sliderRef.current.slickPrev();
    }

    return (
        <div className="py-16 mx-auto">
            <div className="relative mb-7 px-5 md:px-10">
                <Slider ref={sliderRef} {...setting}>
                    {CLASSES.map((item) => (
                        <ClassCard
                            key={item.id}
                            imgUrl={item.imgUrl}
                            backImgUrl={item.backImgUrl}
                            title={item.title} 
                            path={item.path}/>
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