import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='font-sans text-5xl md:text-6xl lg:text-5xl text-white font-bold leading-relaxed md:leading-relaxed lg:leading-relaxed'>
                    Hệ thống chăm sóc sức khoẻ
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-lg font-light leading-relaxed font-sans'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>
                        Chăm sóc sức khoẻ với đội ngũ y bác sĩ giàu kinh nghiệm.
                        <br className='hidden sm:block' />
                        Đặt lịch hẹn của bạn một cách dễ dàng và nhanh chóng.
                    </p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Đặt Lịch Hẹn <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 lg:w-[600px] relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src="https://png.pngtree.com/png-clipart/20240905/original/pngtree-doctors-team-png-image_15943672.png" alt="" />
            </div>
        </div>
    )
}

export default Header