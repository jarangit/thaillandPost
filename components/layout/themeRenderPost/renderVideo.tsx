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
      <div className={`text-blue text-2xl lg:text-3xl`}>ข่าวสารเกี่ยวกับสินค้าและบริการ</div>

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