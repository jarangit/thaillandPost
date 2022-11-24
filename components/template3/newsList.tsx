import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { mockPost } from '../../constant/posts'

type Props = {}

const NewsList = (props: Props) => {
  const styled = {
    root: `
    bg-white p-6  rounded-3xl drop-shadow-md
    `,
    flexItem: `
    flex gap-3 py-3 border-b border-gray-light cursor-pointer items-center
    `,
    boxDate: `
    bg-blue-light text-white w-24 h-[60px] flex justify-center items-center flex-col rounded-sm
    `,
    boxReadMore: `
    flex justify-end gap-1 items-center text-blue hover:text-red cursor-pointer mt-3
    `
  }
  return (
    <div className={`${styled.root}`}>
      <div className='text-2xl text-blue'>ข่าวประชาสัมพันธ์</div>
      {mockPost.slice(0, 5).map((item, key) => (
        <div key={key} className={`${styled.flexItem}`}>
          <div className={`${styled.boxDate}`}>
            <div className='text-blue-dark'>23</div>
            <div>ก.ค.</div>
          </div>
          <div className='text-xs hover:text-blue-dark'>{item.title}</div>
        </div>
      ))}
      <div className={`${styled.boxReadMore}`}>
        <div>Read more</div>
        <div>
          <IoIosArrowDroprightCircle size={25} />
        </div>
      </div>
    </div>
  )
}

export default NewsList