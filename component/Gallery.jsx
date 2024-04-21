import Photo1 from '../assets/Click1.png'
import Photo2 from '../assets/Click2.png'
import Photo3 from '../assets/Click3.png'
import Photo4 from '../assets/Click4.png'
import Photo5 from '../assets/Click5.png'
import Photo6 from '../assets/Click6.png'
import Photo7 from '../assets/Click7.png'

export default function Gallery(){
    return(
        <section id='gallery' className="bg-overallBG py-16 mx-auto">
            <h3 className="text-yellow-400 text-4xl font-semibold text-center mb-10 pt-5">Gallery</h3>
            <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2 ">
                <img src={Photo1} alt="Photo1" className="gallery-img" />
                <img src={Photo2} alt="Photo2" className="gallery-img" />
                <img src={Photo3} alt="Photo3" className="gallery-img" />

                <img src={Photo4} alt="Photo4" className="gallery-img" />
                <div className="md:col-span-2">
                     <img src={Photo5} alt="Photo6" className="gallery-img" />
                </div>
                <img src={Photo6} alt="Photo5" className="gallery-img" />
                
               
                <img src={Photo7} alt="Photo7" className="gallery-img" />

            </div>
        </section>
    )
}