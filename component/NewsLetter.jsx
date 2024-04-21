export default function NewsLetter() {
    return (
        <div className="bg-btnLight text-center">
            <h3 className="text-yellow-400 text-4xl font-semibold mb-10 pt-5">SIGNUP TO OUR NEWSLETTER
            </h3>
            <p className="text-sm text-paragraph">Stay up to date with the latest news and events at Elevate Elite</p>
            <form action="">
                <input type="text" className="border m-6 p-1 w-1/2" placeholder="Email" />
                <button className="text-heading border bg-btnDark p-2 rounded-md">SIGN UP</button>
            </form>
        </div>
    )
}