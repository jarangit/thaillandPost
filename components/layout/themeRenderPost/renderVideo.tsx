import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
type Props = {
  data: any;
}

const RenderVideo = ({ data }: Props) => {
  const { title, contents } = data
  return (
    <div>
      <div className='flex items-center justify-between w-full mb-6'>
        <div className='text-3xl text-blue'>ข่าวสารเกี่ยวกับสินค้าและบริการ</div>
        <div className='text-blue-dark'>10 กรกฎาคม 2565 09.00 น.</div>
      </div>
      {/* content */}
      <div className={`mt-6`}>
        <div className='text-xl lg:text-3xl'>{title}</div>
        <div className='flex justify-center items-center my-6'>
          <ReactPlayer
            url='https://youtu.be/mQtXvO66Zrg'
            // width={"100%"}
            // height={"500px"}
            light={true}
          />
        </div>
        <div className=''>{contents}</div>
      </div>
    </div>
  )
}

export default RenderVideo