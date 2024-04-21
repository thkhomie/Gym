import TEAM from '../assets/Team.png'
import { Link } from 'react-router-dom'

export default function Team(){
    return(
        <div className=" bg-overallBG mx-auto relative flex flex-col-reverse items-center py-24 md:py-52">
            
            <div className="absolute inset-0">
                <img src={TEAM} alt="team" className=' w-full h-full md:w-full md:h-full opacity-65' />
                
            </div>
            
            <div className="absolute text-center flex flex-col justify-center items-center">
                <h3 className=" text-yellow-400 font-semibold text-2xl md:text-4xl p-2 md:p-4 text-center">JOIN THE TEAM</h3>
                <button className="team">
                    <a href='/schedule'>
                        SEE SCHEDULE
                    </a>
                </button>
            </div>
            
        </div>
    )
}