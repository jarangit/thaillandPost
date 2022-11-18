import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Button from '../button/button'
import { listMenu } from '../../constant/menu'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

type Props = {
  onClose: () => void;
  onShow: boolean;
}

const MobileMenu = ({ onClose, onShow }: Props) => {
  return (
    <>
      {onShow && <div className={`absolute bg-gray-dark h-screen w-screen z-10 opacity-70`} onClick={onClose} />
      }
      <div className={` transition-all right-0 absolute z-10 bg-white h-screen `}
        style={{
          width: `${onShow ? "75%" : "0%"}`,
          overflow: `${onShow ? "block" : "hidden"}`,
        }}
      >
        <div className={`absolute top-3 right-3`} onClick={onClose}>
          <BsFillArrowRightCircleFill size={30} color="#D30D2B" />
        </div>
        <div className={`flex flex-col gap-3 px-3 py-6`}>
          <div>เมนู</div>
          {listMenu && listMenu.map((item, key) => (
            <React.Fragment key={key} >
              <li className={`flex gap-2 items-center cursor-pointer hover:text-blue transition-all`}>
                <div>{item.name}</div>
                <div className={`absolute right-2`}>
                  <MdOutlineKeyboardArrowDown />
                </div>
              </li>
            </React.Fragment>
          ))}
          <div className={`flex flex gap-3 justify-center`}>
            <Button>เข้าสู่ระบบ</Button>
            <Button>ลงทะเบียน</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu