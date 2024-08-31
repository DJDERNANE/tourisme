import './style.css';
import './responsive.css';
import Home from './Home.png';
import { FaStar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import hotel1 from '../../assets/2.jpg';
import hotel2 from '../../assets/3.jpg';
import hotel3 from '../../assets/4.jpg';
import { useState } from "react"
const Input = ({ type, placeholder, label }) => {
  return (
    <div className="relative max-w-xs mx-2 ">
      <label className="my-2 text-white">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>
  )
}

const Cards = () => (
  <section className="py-28">
    <div className="max-w-screen-lg mx-auto px-4 md:px-8 ">
      <div className='rounded shadow d-flex flex-md-row flex-column  p-2 my-3'>
        <img src={hotel1} alt='few' width={300}className='rounded hotel-pic' />
        <div className='px-2'>
          <p className='fw-bold fs-4'>Hotel Mellasse</p>
          <p className='d-flex my-2'><FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /></p>
          <p className='d-flex align-items-center '>
          <IoLocation size={22} />
          El Mardja Rout National Vers Alger, تيسمسيلت 38000 الجزائر
        </p>
        <button className='btn-reservation px-4 py-1 mt-3'>
            احجز الآن
        </button>
          </div>
      </div>
      <div className='rounded shadow d-flex flex-md-row flex-column  p-2 my-3'>
        <img src={hotel2} alt='few'  className='rounded hotel-pic' />
        <div className='px-2'>
          <p className='fw-bold fs-4'>Hotel Les Orangers</p>
          <p className='d-flex my-2'><FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /></p>
          <p className='d-flex align-items-center '>
          <IoLocation size={22} />
          El Mardja Rout National Vers Alger, تيسمسيلت 38000 الجزائر
        </p>
        <button className='btn-reservation px-4 py-1 mt-3'>
            احجز الآن
        </button>
        </div>
      </div>
      <div className='rounded shadow d-flex flex-md-row flex-column  p-2 my-3'>
      <img src={hotel3} alt='few' width={300} className='rounded hotel-pic' />
      <div className='px-2'>
        <p className='fw-bold fs-4'>Mirador Palace Hotel</p>
        <p className='d-flex my-2'><FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /> <FaStar color={'gold'} /></p>
        <p className='d-flex align-items-center '>
          <IoLocation size={22} />
          El Mardja Rout National Vers Alger, تيسمسيلت 38000 الجزائر
        </p>
        <button className='btn-reservation px-4 py-1 mt-3'>
            احجز الآن
        </button>
      </div>
    </div>
    </div>
  </section>
)



const Pagination = () => {

    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState("1")

    return (
        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
            <div className="hidden items-center justify-between sm:flex" aria-label="Pagination">
                <a href="javascript:void(0)" className="hover:text-indigo-600 flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
            </svg>
                    السابق
                </a>
                <ul className="flex items-center gap-1">
                    {
                        pages.map((item, idx) => (
                            <li key={item} className="text-sm">
                                {
                                    item == "..." ? (
                                        <div>
                                            {item}
                                        </div>
                                    ) : (

                                        <a href="javascript:void(0)" aria-current={currentPage == item ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${currentPage == item ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`}>
                                            {item}
                                        </a>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <a href="javascript:void(0)" className="hover:text-indigo-600 flex items-center gap-x-2">
                   التالي
                   

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                </svg>
                </a>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</a>
                <div className="font-medium">
                    Page {currentPage} of {pages.length}
                </div>
                <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</a>
            </div>
        </div>
    )
}
export default function Hotels() {
  return (
    <div className="py-5">
      <div className="end-start my-5 d-flex flex-md-row flex-column justify-content-center align-items-center">
        <Input type={'date'} label={'تاريخ بداية الحجز'} />
        <Input type={'date'} label={'تاريخ نهاية الحجز'} />
        <Input type={'number'} label={'عدد الافراد'} />

      </div>

      <div>
        <Cards />
        <Pagination />
      </div>
    </div>
  )
}