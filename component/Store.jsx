import Shop from '../assets/Shop.png'

export default function Store() {
    return (
        <section className="flex items-center justify-center bg-overallBG p-10">
            <div className="md:flex md:items-center md:space-x-6">
                <img src={Shop} alt="shop" className="max-w-full h-auto md:w-1/2" />
                <div className="md:w-1/2 md:h-1/2 text-center">
                    <h3 className="text-fuchsia-800 font-bold text-2xl  md:text-4xl md:mb-10 pt-5">SHOP NOW: WORLDWIDE SHIPPING</h3>
                    <p className="text-paragraph md:m-3 p-4">Gear up for greatness! Bangtao Fighstore is officially open! Get premium combat gear, fight wear and apparel delivered straight to your doorstep!</p>
                    <button className="shop">
                        <a href="/shop">
                            SHOP NOW
                        </a>
                    </button>
                </div>
            </div>
        </section>


    )
}
// w-96 md:h-full