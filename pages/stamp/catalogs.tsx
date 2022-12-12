import React, { useState } from 'react'
import { FaThList } from 'react-icons/fa'
import InputSearch from '../../components/input/inputSearch'
import { BiGridAlt } from 'react-icons/bi'
import SideBar from '../../components/layout/stamp/sideBar'
import StampGrid from '../../components/layout/stamp/stampGrid'
import StampList from '../../components/layout/stamp/stampList'
import { mockDataStampList } from '../../constant/stampList'
type Props = {}

const CatalogsPage = (props: Props) => {
  const [viewStamp, setViewStamp] = useState("grid")
  return (
    <div>
      <div className='myContainer !py-6'>
        <div className='text-xl lg:text-3xl text-blue'>Catalog สินค้าแสตมป์ไทย</div>
        {/* card */}
        <div className={`bg-white min-h-screen p-6 rounded-xl drop-shadow-md mt-6`}>
          <div className={`flex justify-between items-center flex-wrap gap-3`}>
            <div className='text-xl'>สินค้าจากระบบสมาชิกแสตมป์ไทย</div>
            <div className={`flex gap-2 items-center`}>
              <div className='border rounded-md border-gray-light'>
                <InputSearch />
              </div>

              <div className={`cursor-pointer ${viewStamp == "grid" ? "text-blue" : "text-[#9B9898]"}`} onClick={() => setViewStamp("grid")}>
                <FaThList size={20} />
              </div>
              <div className={`cursor-pointer ${viewStamp == "list" ? "text-blue" : "text-[#9B9898]"}`} onClick={() => setViewStamp("list")}>
                <BiGridAlt size={20} />
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-4 gap-3 mt-6 pt-3 border-t border-gray-light lg:divide-x-[1px] lg:divide-gray-light`}>
            <div className='col-span-4 lg:col-span-1 lg:min-h-screen'>
              <SideBar />
            </div>
            <div className='col-span-4 lg:col-span-3 lg:min-h-screen lg:pl-3'>
              {viewStamp == "grid" && <StampGrid data={mockDataStampList} />}
              {viewStamp == "list" && <StampList data={mockDataStampList} />}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CatalogsPage