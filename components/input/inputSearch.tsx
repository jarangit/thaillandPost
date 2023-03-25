import React, { useMemo, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
import { useRouter } from 'next/router';
type Props = {
  placeholder?: string;
}

const InputSearch = ({ placeholder }: Props) => {
  const { push } = useRouter()
  const [textSearch, setTextSearch] = useState("")
  const styled = useMemo(() => ({
    root: `
    bg-white flex gap-2 items-center rounded-md h-8 pl-2 overflow-hidden
    `,
    boxImage: `
    h-full p-2 flex items-center bg-[#EFF1F2]
    `
  }), [])

  //functions
  const onClickSearch = () => {
    if (textSearch) {
      push('/search')
    }
  }
  return (
    <div className={`${styled.root}`}>
      <div onClick={onClickSearch}>
        <AiOutlineSearch
          color='#9B9898'
        />
      </div>
      <input placeholder={placeholder ?? "ไปรษณีย์ไทย"} className={`text-gray text-sm`} onChange={(e) => setTextSearch(e.target.value)} />
      <div className={`${styled.boxImage}`}>
        <Image
          src='/img/icons/control.svg'
          alt=''
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}

export default InputSearch