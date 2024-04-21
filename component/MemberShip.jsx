// import { useState } from "react";

// export default function Membership() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     trainingSession: '',
//     selectedOptions: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleOptionChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setFormData({
//         ...formData,
//         selectedOptions: [...formData.selectedOptions, value],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         selectedOptions: formData.selectedOptions.filter((option) => option !== value),
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send data to backend or display a success message
//     console.log(formData);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto lg:w-1/2 bg-white p-8 rounded-lg shadow-md text-center">
//         <h2 className="text-xl mb-4 text-gray-800 font-semibold">Elevate Elite</h2>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
//           <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Your Age" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="trainingSession" className="block text-gray-700 font-medium mb-2">Training Session</label>
//           <select id="trainingSession" name="trainingSession" value={formData.trainingSession} onChange={handleChange} className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required>
//             <option value="">Select Training Session</option>
//             <option value="7 days">7 Days</option>
//             <option value="1 month">1 Month</option>
//             <option value="3 months">3 Months</option>
//             <option value="1 year">1 Year</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Select Classes</label>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="flex items-center">
//                 <input type="checkbox" value="muay thai" onChange={handleOptionChange} className="mr-2" />
//                 Muay Thai
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input type="checkbox" value="fit" onChange={handleOptionChange} className="mr-2" />
//                 Fit
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input type="checkbox" value="bjj" onChange={handleOptionChange} className="mr-2" />
//                 BJJ
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input type="checkbox" value="kettlebell" onChange={handleOptionChange} className="mr-2" />
//                 Kettlebell
//               </label>
//             </div>
//             <div>
//               <label className="flex items-center">
//                 <input type="checkbox" value="yoga" onChange={handleOptionChange} className="mr-2" />
//                 Yoga
//               </label>
//             </div>
//           </div>
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Join</button>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import PriceTable from "./PriceTable";

export default function Membership() {
  const initialFormData = {
    name: '',
    email: '',
    age: '',
    trainingSession: '',
    selectedOptions: [],
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        selectedOptions: [...formData.selectedOptions, value],
      });
    } else {
      setFormData({
        ...formData,
        selectedOptions: formData.selectedOptions.filter((option) => option !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ ...initialFormData });
  };

  return (

    <>
      <PriceTable />
       <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto lg:w-1/2 bg-white p-8 rounded-lg shadow-md text-center">
        {submitted && (
          <div className="text-green-500 mb-4">
            Form submitted successfully!
          </div>
        )}
        <h2 className="text-xl mb-4 text-gray-800 font-semibold">Elevate Elite</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Your Age" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="trainingSession" className="block text-gray-700 font-medium mb-2">Training Session</label>
          <select id="trainingSession" name="trainingSession" value={formData.trainingSession} onChange={handleChange} className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-4 py-2" required>
            <option value="">Select Training Session</option>
            <option value="7 days">7 Days</option>
            <option value="1 month">1 Month</option>
            <option value="3 months">3 Months</option>
            <option value="1 year">1 Year</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Classes</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" value="muay thai" onChange={handleOptionChange} checked={formData.selectedOptions.includes("muay thai")} className="mr-2" />
                Muay Thai
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" value="fit" onChange={handleOptionChange} checked={formData.selectedOptions.includes("fit")} className="mr-2" />
                Fit
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" value="bjj" onChange={handleOptionChange} checked={formData.selectedOptions.includes("bjj")} className="mr-2" />
                BJJ
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" value="kettlebell" onChange={handleOptionChange} checked={formData.selectedOptions.includes("kettlebell")} className="mr-2" />
                Kettlebell
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" value="yoga" onChange={handleOptionChange} checked={formData.selectedOptions.includes("yoga")} className="mr-2" />
                Yoga
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Join</button>
      </form>
    </div>
    </>
   
  );
}
