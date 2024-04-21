export default function PriceTable() {
    return (
        <div className="flex justify-center p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Muay Thai */}
                <div className="bg-blue-200 text-blue-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Muay Thai</h2>
                    <ul>
                        <li>7 Days: $50</li>
                        <li>1 Month: $150</li>
                        <li>3 Months: $400</li>
                        <li>1 Year: $1200</li>
                    </ul>
                </div>

                {/* Fit */}
                <div className="bg-green-200 text-green-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Fit</h2>
                    <ul>
                        <li>7 Days: $40</li>
                        <li>1 Month: $120</li>
                        <li>3 Months: $320</li>
                        <li>1 Year: $1000</li>
                    </ul>
                </div>

                {/* BJJ */}
                <div className="bg-purple-200 text-purple-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">BJJ</h2>
                    <ul>
                        <li>7 Days: $60</li>
                        <li>1 Month: $180</li>
                        <li>3 Months: $480</li>
                        <li>1 Year: $1500</li>
                    </ul>
                </div>

                {/* Yoga */}
                <div className="bg-yellow-200 text-yellow-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Yoga</h2>
                    <ul>
                        <li>7 Days: $35</li>
                        <li>1 Month: $100</li>
                        <li>3 Months: $280</li>
                        <li>1 Year: $900</li>
                    </ul>
                </div>

                {/* Kettlebell */}
                <div className="bg-red-200 text-red-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Kettlebell</h2>
                    <ul>
                        <li>7 Days: $45</li>
                        <li>1 Month: $130</li>
                        <li>3 Months: $360</li>
                        <li>1 Year: $1100</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}