import React, { useCallback, useMemo } from 'react'
import { list1, list2, address } from '../../constant/footerLink'
import { RiContactsBookFill } from 'react-icons/ri'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { FaFax } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

type Props = {}

const Footer = (props: Props) => {
  //styles zone 
  const styled = useMemo(() => ({
    root: `
  bg-blue text-white py-10 px-6 lg:px-3
  `,
    grid: `
  myContainer grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6
  `,
    boxContent: `
  flex flex-col gap-1 mt-4 hover:text-gray
  `,
    linkItem: `
  cursor-pointer hover:text-red
  `
  }), [])
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
    <div className={`${styled.root}`}>
      <div className={`${styled.grid}`}>
        <div>
          <div className={`font-semibold`}>ข่าวประชาสัมพันธ์</div>
          <ul className={`${styled.boxContent}`}>
            {list1.map((item, key) => (
              <React.Fragment key={key}>
                <li className={`${styled.linkItem}`}> {item.name} </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <div className={`font-semibold`}>แคตตาล็อก</div>
            <ul className={`${styled.boxContent}`}>
              {list2.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`${styled.linkItem}`}> {item.name} </li>
                </React.Fragment>))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div className={`font-semibold`}>หน่วยงานที่เกี่ยวข้อง</div>
            <ul className={`${styled.boxContent}`}>
              {list2.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`${styled.linkItem}`}> {item.name} </li>
                </React.Fragment>))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div className={`font-semibold`}>บริษัท ไปรษณีย์ไทย จำกัด</div>
            <ul className={`${styled.boxContent}`}>
              {address.map((item, key) => (
                <React.Fragment key={key}>
                  <li className={`${styled.linkItem} flex gap-3`}>
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