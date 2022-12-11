import React from 'react'
import Button from '../../components/button/button'
import { mockDataSearchList } from '../../constant/searchList'
type Props = {}

const SearchPage = (props: Props) => {
  return (
    <div>
      <div className='myContainer !py-10'>
        <div className={`text-3xl text-blue`}>ค้นหา</div>
        {/* card */}
        <div className='mt-6 bg-white p-8 rounded-xl flex flex-col gap-6 drop-shadow-md min-h-screen h-full'>
          <div>
            <Button w={"auto"} bgColor="#FF3A1C" radius={"50px"}>ข่าวประชาสัมพันธ์</Button>
          </div>
          <div>
            {mockDataSearchList.map((item, key) => (
              <div key={key} className={`flex flex-wrap  gap-3 justify-between py-3 border-b border-gray-light cursor-pointer hover:text-red hover:border-red transition-all`}>
                <div>{item.title}</div>
                <div className={`text-right w-full lg:w-auto`}>{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage