import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { mockDataContentLists } from '../../constant/contentList'
type Props = {}

const ContentPage = (props: Props) => {
  return (
    <div>
      <div className={`myContainer !py-10`}>
        <div className={`text-3xl text-blue`}>ข่าวประชาสัมพันธ์</div>

        {/* card */}
        <div className={`bg-white rounded-xl overflow-hidden mt-6`}>
          {mockDataContentLists.map((item, key) => (
            <div key={key} className={`border-b border-gray-light`}>
              <div className={`flex gap-3 justify-between items-center p-3 cursor-pointer`}>
                <div className={`flex gap-3 items-center`}>
                  <div className={`rounded-xl overflow-hidden`}>
                    <Image src={item.image} alt="" width={80} height={80} />
                  </div>
                  <div className={`hover:text-red`}>{item.title}</div>
                </div>
                <div className='flex gap-3'>
                  <div className='text-blue-dark'>{item.date}</div>
                  <div className='text-blue-dark'>
                    <MdKeyboardArrowRight size={25} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentPage