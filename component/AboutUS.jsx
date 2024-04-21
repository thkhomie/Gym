import AbtPhoto from '../assets/AboutPhoto.png'
import Footer from '../component/Footer'
import SocialMedia from '../component/SocialMedia'

export default function AboutUs() {
    return (
        <>
            <div className='bg-[#A2D2FF]'>
                <div className="mx-auto ">
                    <h1 className="text-3xl font-semibold text-center px-4 py-8 mb-4 text-piink">About Us</h1>
                    <img src={AbtPhoto} alt="group-photo" className="w-full h-full" />
                    <section className="mb-8 px-4 py-8">
                        <h2 className="text-xl font-bold mb-4 text-yeellow text-center">Our Mission</h2>
                        <p className="text-paragraph leading-relaxed text-center font-semibold">
                            At Elevate Elite, our mission is to provide a welcoming and inclusive environment for individuals of all fitness levels to pursue their health and wellness goals.
                            Whether you're a seasoned athlete or just starting your fitness journey, we offer a variety of programs and classes to help you achieve your personal best.
                        </p>
                    </section>

                    <section className="mb-8 px-4 py-8">
                        <h2 className="text-xl font-bold mb-4 text-yeellow text-center">Our Offerings</h2>
                        <p className="text-paragraph leading-relaxed text-center m-3 font-semibold">
                            At our gym, we offer a diverse range of fitness programs to cater to different interests and fitness levels:
                        </p>

                        <div className="flex items-center justify-center w-full h-full bg-fixed bg-cover p-3">
                            <ul className=" text-center pl-4">
                                <li className='text-navUnderLine font-semibold'>
                                    <h3 className='text-piink m-3 font-bold'>Muay Thai</h3>
                                     <p className='text-navUnderLine font-semibold'>
                                       Learn the art of Thai boxing with our experienced instructors. 
                                       </p>
                                     </li>
                                <li>
                                    <h3 className='text-piink m-3 font-bold'>Brazilian Jiu-Jitsu (BJJ)</h3>
                                     <p className='text-navUnderLine font-semibold'>Master grappling techniques and improve your ground game.</p>
                                     </li>
                                <li>
                                    <h3 className='text-piink m-3 font-bold'>Kettlebell Training</h3>
                                     <p className='text-navUnderLine font-semibold'>Build strength and endurance with dynamic kettlebell workouts.</p>
                                     </li>
                                <li>
                                    <h3 className='text-piink m-3 font-bold'>Fitness Classes</h3>
                                     <p className='text-navUnderLine font-semibold'>Join our group fitness classes for a full-body workout and community support.</p>
                                     </li>
                                <li>
                                    <h3 className='text-piink m-3 font-bold'>Yoga</h3>
                                     <p className='text-navUnderLine font-semibold'>Find balance, flexibility, and inner peace with our yoga classes suitable for all levels.</p>
                                     </li>
                            </ul>
                        </div>

                    </section>

                    <section className="mb-8 px-4 py-8">
                        <h2 className="text-xl font-bold mb-4 text-yeellow text-center">Our Team</h2>
                        <p className="text-paragraph leading-relaxed text-center font-semibold">
                            Our team of certified trainers and instructors is dedicated to helping you reach your fitness goals.
                            With their expertise and passion for fitness, they will guide and motivate you throughout your journey.
                        </p>
                    </section>

                    <section className="mb-8 px-4 py-8">
                        <h2 className="text-xl font-bold mb-4 text-yeellow text-center">Join Us Today</h2>
                        <p className="text-paragraph leading-relaxed text-center font-semibold">
                            Ready to take the first step towards a healthier and happier you?
                            Join us at Elevate Elite and experience the benefits of our diverse fitness programs and supportive community.
                        </p>
                    </section>
                </div>
            </div>
            <SocialMedia />
            <Footer />
        </>

    );
}
 
