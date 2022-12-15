import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  data: any;
}

const StampListItem = ({ data }: Props) => {
  const RenderTags = () => {
    return (
      <>
        <div className=' absolute -top-3 -left-1'>
          {data.new ? <div><Image src={'/img/icons/new.png'} alt="" width={50} height={50} /></div> : <div></div>}
        </div>
        <div className=' absolute -top-2 right-1'>
          {data.hot ? <div className='mt-2'><Image src={'/img/icons/hot.png'} alt="" width={25} height={30} /></div> : <div></div>}
        </div>
      </>
    )
  }

  return (
    <Link href={`/stamp/${data.id}`}>

      <div className='flex gap-3 justify-between  h-full cursor-pointer drop-shadow-sm border-gray-light  border-b pb-6 lg:border-none lg:pb-0'>
        <div className='flex items-center gap-3'>
          <div className='relative mb-5 bg-blue-light px-2 py-6'>
            <div className='relative  h-[100px] w-24'>
              <Image src={data.image} alt="" fill style={{ objectFit: "contain", }} />
            </div>
            <RenderTags />
          </div>

          <div className='flex gap-2 flex-col'>
            <div className={`text-xs line-clamp-3 hover:text-red transition-all`}>
              {data.name}
            </div>
            <div className='flex gap-1 text-xs flex-wrap '>
              {data.limited && <div className='bg-orange-light text-orange px-2 rounded-full'>Limited</div>}
              {data.recommend && <div className='bg-green-light text-green px-2 rounded-full'>Recommend</div>}
            </div>
            <div className='text-red lg:hidden'>{data.price} บาท</div>

            <button className='bg-red-light text-white rounded-full p-1 text-sm px-2 w-fit'>Detail</button>
          </div>
        </div>
        <div className='w-fit  min-w-[50px] mt-8 hidden lg:block'>
          <div className='text-red'>{data.price} บาท</div>
        </div>
      </div>
    </Link>
  )
}

export default StampListItem