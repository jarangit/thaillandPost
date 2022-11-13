import React, { useCallback } from 'react'
import { list1, list2, address } from '../../constant/footerLink'
import { RiContactsBookFill } from 'react-icons/ri'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { FaFax } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

type Props = {}

const Footer = (props: Props) => {

  const renderAddressIcon = useCallback((type: string) => {
    switch (type) {
      case "address":
        return <RiContactsBookFill size={20} />
      case "phone":
        return <MdOutlinePhoneIphone size={20} />
      case "fax":
        return <FaFax size={20} />
      case "email":
        return <AiOutlineMail size={20} />
      default:
        break;
    }
  }, [])

  return (
    <div className={`bg-blue text-white py-10 px-6 lg:px-3`}>
      <div className={`myContainer grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6`}>
        <div>
          <div className={`font-semibold`}>ข่าวประชาสัมพันธ์</div>
          <ul className={`flex flex-col gap-1 mt-4 hover:text-gray`}>
            {list1.map((item, key) => (
              <React.Fragment key={key}>
                <li className={`cursor-pointer hover:text-red`}> {item.name} </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <div className={`font-semibold`}>แคตตาล็อก</div>
            <ul className={`flex flex-col gap-1 mt-4 hover:text-gray`}>
              {list2.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`cursor-pointer hover:text-red`}> {item.name} </li>
                </React.Fragment>))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div className={`font-semibold`}>หน่วยงานที่เกี่ยวข้อง</div>
            <ul className={`flex flex-col gap-1 mt-4 hover:text-gray`}>
              {list2.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`cursor-pointer hover:text-red`}> {item.name} </li>
                </React.Fragment>))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div className={`font-semibold`}>บริษัท ไปรษณีย์ไทย จำกัด</div>
            <ul className={`flex flex-col gap-1 mt-4 hover:text-gray`}>
              {address.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`cursor-pointer hover:text-red flex gap-3`}>
                    <div className={`mt-1`}>
                      {renderAddressIcon(item.type)}
                    </div>
                    <div>
                      {item.text}
                    </div>
                  </li>
                </React.Fragment>))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer