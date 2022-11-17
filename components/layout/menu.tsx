import React from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineMenu } from 'react-icons/md'
import Image from 'next/image'
import Button from '../button/button'
import { IoIosHome } from 'react-icons/io'
import InputSearch from '../input/inputSearch'
import { AiFillCaretDown, } from 'react-icons/ai'
type Props = {}

const listMenu = [
  {
    name: 'ข่าวประชาสัมพันธ์',
    url: '#'
  },
  {
    name: 'แคตตาล็อก',
    url: '#'
  },
  {
    name: 'หน่วยงานที่เกี่ยวข้อง',
    url: '#'
  },
]
const Menu = (props: Props) => {
  return (
    <div>
      <div className={`flex justify-between items-center lg:h-24 px-2 lg:px-6 bg-white`}>
        <div className={`flex gap-3 md:gap-10 items-center`}>
          <div className={`relative w-12 h-12 md:w-24 md:h-24`}>
            <Image
              src='/img/logo.png'
              alt='logo'
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>
          <div>
            <ul className={`lg:flex gap-4 hidden`}>
              {listMenu && listMenu.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`flex gap-2 items-center cursor-pointer hover:text-blue transition-all`}>
                    <div>{item.name}</div>
                    <MdOutlineKeyboardArrowDown />
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className={` flex flex-row gap-3 items-center`}>
          <Button>เข้าสู่ระบบ</Button>
          <Button>ลงทะเบียน</Button>
          <div className='lg:hidden'>
            <MdOutlineMenu size={40} color="#002369" />
          </div>
        </div>
      </div>
      <div className={`bg-red p-2 md:px-6 flex justify-between items-center`}>
        <div>
          <div className={`flex gap-3 items-center text-white`}>
            <IoIosHome color='#ffff' size={20} />
            <div className={`text-xs`}>หน้าแรก</div>
          </div>
        </div>
        <div className={`flex  gap-2 md:gap-6 items-center cursor-pointer`}>
          <InputSearch />
          <div className={`text-white flex gap-1 items-center text-xs`}>
            <Image
              src='/img/icons/thailand.svg'
              alt=''
              width={20}
              height={20}
            />
            <div className={`hidden md:block`}>ภาษาไทย</div>
            <div className={` hidden md:block`}>
              <AiFillCaretDown size={10} color="#ffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu