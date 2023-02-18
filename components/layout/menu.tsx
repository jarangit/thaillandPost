import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineMenu } from 'react-icons/md'
import Image from 'next/image'
import Button from '../button/button'
import { IoIosHome } from 'react-icons/io'
import InputSearch from '../input/inputSearch'
import { AiFillCaretDown, } from 'react-icons/ai'
import MobileMenu from './mobileMenu'
import { listMenu } from '../../constant/menu'
import Link from 'next/link'
import { AppContext } from '../../context/appState'
type Props = {}


const Menu = (props: Props) => {
  const [showMBMenu, setShowMBMenu] = useState(false)
  const { userLocation, setUserLocation }: any = useContext(AppContext)
  const [showDropdownLanguage, setShowDropdownLanguage] = useState(false)

  const onChangeLanguage = (value: string) => {
    setUserLocation(value)
    setShowDropdownLanguage(false)
  }


  return (
    <>
      <MobileMenu onClose={() => setShowMBMenu(false)} onShow={showMBMenu} />
      <div>
        <div className={`flex justify-between items-center lg:h-24 px-2 lg:px-6 bg-white`}>
          <div className={`flex gap-3 md:gap-10 items-center`}>
            <Link href={'/'}>
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
            </Link>
            <div>
              <ul className={`lg:flex gap-4 hidden`}>
                {listMenu && listMenu.map((item, key) => (
                  <React.Fragment key={key}>
                    <li className={`flex gap-2 items-center cursor-pointer hover:text-blue transition-all`}>
                      {userLocation == "TH" ? (
                        <div>{item.nameTH}</div>
                      ) : (
                        <div>{item.nameEN}</div>
                      )}
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
            <div className='lg:hidden' onClick={() => setShowMBMenu(true)}>
              <MdOutlineMenu size={40} color="#002369" />
            </div>
          </div>
        </div>
        <div className={`bg-red p-2 md:px-6 flex justify-between items-center`}>
          <div>
            <div className={`flex gap-3  text-white`}>
              <IoIosHome color='#ffff' size={20} />
              <div className={`text-md`}>หน้าแรก</div>
            </div>
          </div>
          <div className={`flex  gap-2 md:gap-6 items-center cursor-pointer`}>
            <InputSearch />
            <div className={`text-white flex gap-1 items-center text-md relative`} onClick={() => setShowDropdownLanguage(!showDropdownLanguage)}>
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
              <div className={`absolute top-5 right-2 bg-white divide-y divide-gray text-black px-3 py-1 drop-shadow-md rounded-sm transition-all ${showDropdownLanguage ? "opacity-100" : "opacity-0"}`}>
                <div className={`hover:text-red cursor-pointer ${userLocation == "TH" ? "text-red":""}`} onClick={() => onChangeLanguage("TH")}>TH</div>
                <div className={`hover:text-red cursor-pointer ${userLocation == "EN" ? "text-red":""}`} onClick={() => onChangeLanguage("EN")}>EN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu