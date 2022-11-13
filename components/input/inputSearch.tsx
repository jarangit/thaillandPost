import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
type Props = {}

const InputSearch = (props: Props) => {
  return (
    <div className={`bg-white flex gap-2 items-center rounded-md h-8 pl-2 overflow-hidden`}>
      <AiOutlineSearch
        color='#9B9898'
      />
      <input placeholder='ไปรษณีย์ไทย' className={`text-gray text-sm`}/>
      <div className={` h-full p-2 flex items-center bg-[#EFF1F2]`}>
        <Image
          src='/img/control.svg'
          alt=''
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}

export default InputSearch