import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { mockPost } from '../../constant/posts'

type Props = {}

const NewsList = (props: Props) => {
  return (
    <div className=' bg-white p-6  rounded-3xl drop-shadow-md'>
      <div className='text-2xl text-blue'>ข่าวประชาสัมพันธ์</div>
      {mockPost.map((item, key) => (
        <div key = {key} className='flex gap-3 py-3 border-b border-gray-light cursor-pointer items-center'>
          <div className='bg-blue-light text-white w-24 h-[60px] flex justify-center items-center flex-col rounded-sm'>
            <div className='text-blue-dark'>23</div>
            <div>ก.ค.</div>
          </div>
          <div className='text-xs hover:text-blue-dark'>{item.title}</div>
        </div>
      ))}
      <div className='flex justify-end gap-1 items-center text-blue hover:text-red cursor-pointer mt-3'>
        <div>Read more</div>
        <div>
          <IoIosArrowDroprightCircle size = {25}/>
        </div>
      </div>
    </div>
  )
}

export default NewsList