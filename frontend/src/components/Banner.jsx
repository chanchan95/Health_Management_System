import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Đặt Lịch Khám</p>
                    <p className='mt-6 lg:text-3xl'>Với đội ngũ bác sĩ giàu kinh nghiệm</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Tạo tài khoản</button>
            </div>            
            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[800px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-lg' src="https://jieh.vn/upload/images/c%C3%A1c%20b%C3%A1c%20s%C4%A9.png" alt="" />
            </div>
        </div>
    )
}

export default Banner