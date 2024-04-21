export default function MerchCard({imgUrl, name, price, buy}) {
    return (
        <div className="bg-white min-w-48 flex flex-col items-center justify-center border-2 border-blue-300 rounded-md m-6 py-6 shadow-2xl">
            <div className="w-32 flex justify-center">
                <img src={imgUrl} alt={name} className="" />
            </div>
            <div className="p-4 text-center">
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <p className="text-red-300">{price}</p>
                <button className="text-white bg-sky-800 hover:bg-sky-300 mt-2 px-4 py-2 rounded-md">{buy}</button>
            </div>
        </div>
    )
}
