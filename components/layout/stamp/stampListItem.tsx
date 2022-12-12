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

        <div className='flex justify-between items-center gap-1 text-xs flex-wrap absolute -top-3 -left-1 w-full'>
          {data.new ? <div><Image src={'/img/icons/new.png'} alt="" width={50} height={50} /></div> : <div></div>}
          {data.hot ? <div className='mt-2'><Image src={'/img/icons/hot.png'} alt="" width={30} height={30} /></div> : <div></div>}
        </div>
      </>
    )
  }

  return (
    <Link href={`/stamp/${data.id}`}>

      <div className='flex gap-3 justify-between  h-full cursor-pointer drop-shadow-sm border-gray-light  border-b pb-6 lg:border-none lg:pb-0'>
        <div className='flex items-center gap-3'>
          <div className='relative  bg-blue-light px-2 h-full flex items-center min-w-[120px] lg:min-h-[130px]'>
            <Image src={data.image} alt="" width={100} height={100} />
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