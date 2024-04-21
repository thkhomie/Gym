import MerchCard from "../card/MerchCard";
import { APPAREAL } from "../data/Appareal";
import Search from '../appareal/Search.svg'
import Bag from '../appareal/Bag.svg'

export default function Merch() {
    return (
        <div className="">
            <div className="flex justify-end mt-4 ">
                <img src={Search} alt="" className="w-10 mr-4" />
                <img src={Bag} alt="" className="w-10 mr-4"/>
            </div>

            <div className="flex justify-around mx-auto flex-wrap p-6">
                
                {APPAREAL.map((item) => (
                    <MerchCard
                        key={item.id}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        price={item.price}
                        buy={item.buy} />
                ))}
            </div>
        </div>
    )
}