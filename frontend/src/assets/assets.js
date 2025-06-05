import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Bác sĩ Đa khoa',
        image: General_physician
    },
    {
        speciality: 'Bác sĩ Phụ khoa',
        image: Gynecologist
    },
    {
        speciality: 'Bác sĩ Da liễu',
        image: Dermatologist
    },
    {
        speciality: 'Bác sĩ Nhi khoa',
        image: Pediatricians
    },
    {
        speciality: 'Bác sĩ Thần kinh',
        image: Neurologist
    },
    {
        speciality: 'Bác sĩ Tiêu hóa',
        image: Gastroenterologist
    },
]

export const doctors = [    {
        _id: 'doc1',
        name: 'BS. Nguyễn Văn Hùng',
        image: doc1,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Nguyễn Văn Hùng có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Nguyễn Văn Hùng có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 17 Đường Lê Lợi',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc2',
        name: 'BS. Lê Thị Mai',
        image: doc2,
        speciality: 'Phụ khoa',
        degree: 'MBBS',
        experience: '3 Năm',
        about: 'BS. Lê Thị Mai có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Lê Thị Mai có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 60,
        address: {
            line1: 'Số 27 Đường Nguyễn Huệ',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc3',
        name: 'BS. Trần Thị Hồng',
        image: doc3,
        speciality: 'Da liễu',
        degree: 'MBBS',
        experience: '1 Năm',
        about: 'BS. Trần Thị Hồng có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Trần Thị Hồng có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 30,
        address: {
            line1: 'Số 37 Đường Trần Hưng Đạo',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc4',
        name: 'BS. Phạm Văn Nam',
        image: doc4,
        speciality: 'Nhi khoa',
        degree: 'MBBS',
        experience: '2 Năm',
        about: 'BS. Phạm Văn Nam có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Phạm Văn Nam có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 40,
        address: {
            line1: 'Số 47 Đường Lý Tự Trọng',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc5',
        name: 'BS. Nguyễn Thị Lan',
        image: doc5,
        speciality: 'Thần kinh',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Nguyễn Thị Lan có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Nguyễn Thị Lan có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 57 Đường Pasteur',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc6',
        name: 'BS. Vũ Minh Tuấn',
        image: doc6,
        speciality: 'Thần kinh',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Vũ Minh Tuấn có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Vũ Minh Tuấn có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 67 Đường Hai Bà Trưng',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc7',
        name: 'BS. Đặng Văn Minh',
        image: doc7,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Đặng Văn Minh có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Đặng Văn Minh có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 17 Đường Đồng Khởi',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc8',
        name: 'BS. Hoàng Thị Ánh',
        image: doc8,
        speciality: 'Phụ khoa',
        degree: 'MBBS',
        experience: '3 Năm',
        about: 'BS. Hoàng Thị Ánh có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Hoàng Thị Ánh có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 60,
        address: {
            line1: 'Số 27 Đường Cách Mạng Tháng 8',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc9',
        name: 'BS. Bùi Thị Thu',
        image: doc9,
        speciality: 'Da liễu',
        degree: 'MBBS',
        experience: '1 Năm',
        about: 'BS. Bùi Thị Thu có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Bùi Thị Thu có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 30,
        address: {
            line1: 'Số 37 Đường Nam Kỳ Khởi Nghĩa',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc10',
        name: 'BS. Ngô Văn Đức',
        image: doc10,
        speciality: 'Nhi khoa',
        degree: 'MBBS',
        experience: '2 Năm',
        about: 'BS. Ngô Văn Đức có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Ngô Văn Đức có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 40,
        address: {
            line1: 'Số 47 Đường Võ Văn Tần',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc11',
        name: 'BS. Lê Thị Hoa',
        image: doc11,
        speciality: 'Tiêu hóa',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Lê Thị Hoa có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Lê Thị Hoa có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 57 Đường Điện Biên Phủ',
            line2: 'Quận Bình Thạnh, TP. Hồ Chí Minh'
        }
    },    {
        _id: 'doc12',
        name: 'BS. Trần Văn Hải',
        image: doc12,
        speciality: 'Thần kinh',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Trần Văn Hải có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Trần Văn Hải có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 67 Đường Nguyễn Thị Minh Khai',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc13',
        name: 'BS. Võ Thị Kim',
        image: doc13,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 Năm',
        about: 'BS. Võ Thị Kim có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Võ Thị Kim có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 50,
        address: {
            line1: 'Số 17 Đường Bến Vân Đồn',
            line2: 'Quận 4, TP. Hồ Chí Minh'
        }
    },    {
        _id: 'doc14',
        name: 'BS. Phan Văn Long',
        image: doc14,
        speciality: 'Phụ khoa',
        degree: 'MBBS',
        experience: '3 Năm',
        about: 'BS. Phan Văn Long có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Phan Văn Long có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 60,
        address: {
            line1: 'Số 27 Đường Võ Thị Sáu',
            line2: 'Hà Nội, Việt Nam'
        }
    },    {
        _id: 'doc15',
        name: 'BS. Nguyễn Thị Xuân',
        image: doc15,
        speciality: 'Da liễu',
        degree: 'MBBS',
        experience: '1 Năm',
        about: 'BS. Nguyễn Thị Xuân có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả. BS. Nguyễn Thị Xuân có cam kết mạnh mẽ trong việc cung cấp dịch vụ chăm sóc y tế toàn diện.',
        fees: 30,
        address: {
            line1: 'Số 37 Đường Lê Văn Sỹ',
            line2: 'Quận Phú Nhuận, TP. Hồ Chí Minh'
        }
    },
]
