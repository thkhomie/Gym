import StarIcon from '../assets/StarIcon.svg'

export default function TestimonalCard({ imgUrl, name, description }) {
    return (
        <div className="p-6 rounded-md border mx-2">
                <div className="flex items-center gap-3 mb-4">
                    <img src={imgUrl} alt="review" className="w-14 h-14 md:w-16 md:h-16 rounded-full" />

                    <div className="bg-btnDark">
                    <h4 className="text-heading text-sm font-medium md:text-base mb-1">{name}</h4>
                    <div className='flex items-end gap-[2px]'>
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                    </div>

                    <p className="text-paragraph text-xs md:text-[13px] p-3">{description}</p>
                </div>
                </div>
                

        </div>
    )
}