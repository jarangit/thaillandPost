import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import InputSearch from '../../components/input/inputSearch'
import { mockDataStampList } from '../../constant/stampList'

type Props = {}

const StampDetailPage = (props: Props) => {
  const { query } = useRouter()
  const [dataStamp, setDataStamp] = useState<any>()
  const styled = {
    textDetail: ``,
  }
  const getData = (id: any) => {
    const res: any = mockDataStampList.find((item: any) => item.id == id)
    if (res) {
      setDataStamp(res)
    }
  }

  useEffect(() => {
    if (query.id) {
      getData(query.id)
    }
  }, [])

  return (
    <div>
      <div className='myContainer !py-6'>
        <div className='text-2xl lg:text-3xl text-blue mb-6'>แสตมป์ที่ระลึก</div>
        {/* card */}
        <div className='bg-white rounded-xl p-6 drop-shadow-lg'>
          <div className='flex flex-wrap lg:flex-nowrap gap-3 justify-center lg:justify-between items-center pb-3 border-b border-gray-light'>
            <div className='line-clamp-1'>{dataStamp?.name}</div>
            <div className='border rounded-md border-gray-light hidden lg:block'>
              <InputSearch />
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
            <div>
              <div className='relative max-w-[600px] w-full h-[300px]'>
                <Image src={dataStamp?.image} alt="" fill style={{ objectFit: "contain" }} />
              </div>
              <div className='text-center mt-3 w-full flex justify-center'>
                <Link href={"/stamp/catalogs"}>
                  <div className='bg-red-light text-white px-3 rounded-full w-fit' >Back</div>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 flex-col'>
              <div className='line-clamp-2'>{dataStamp?.name}</div>
              <div className='text-red'>{dataStamp?.price} บาท</div>
              <ul className='flex flex-col gap-3 text-xs'>
                <li className='flex gap-3'>
                  <div className='min-w-[110px] font-bold'>ภาพ</div>
                  <div className={`${styled.textDetail}`}>: {dataStamp?.description}</div>
                </li>
                <li className='flex gap-3'>
                  <div className='min-w-[110px] font-bold'>ขนาด</div>
                  <div className={`${styled.textDetail}`}>: {dataStamp?.size}</div>
                </li>
                <li className='flex gap-3'>
                  <div className='min-w-[110px] font-bold'>วิธีการพิมพ์และสี</div>
                  <div className={`${styled.textDetail}`}>: {dataStamp?.colors}</div>
                </li>
                <li className='flex gap-3'>
                  <div className='min-w-[110px] font-bold'>จำนวนดวงในแผ่น </div>
                  <div className={`${styled.textDetail}`}>: {dataStamp?.stock} ดวง</div>
                </li>
                <li className='flex gap-3'>
                  <div className='min-w-[110px] font-bold'>ซองวันแรกจำหน่าย </div>
                  <div className={`${styled.textDetail}`}>: {dataStamp?.sellDayOne}</div>
                </li>
                <li className='flex gap-3'>
                  <div className='min-w-[110px] font-bold'>ผู้ประกอบแบบ </div>
                  <div className={`${styled.textDetail}`}>: {dataStamp?.author}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StampDetailPage