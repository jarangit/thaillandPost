import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Button from '../button/button'

const AgencyListTemplate2 = () => {
  return (
    <div className='py-6 px-8 bg-white rounded-3xl h-full'>
      <div className='text-red'>หน่วยงานที่เกี่ยวข้อง</div>

      <div className='flex flex-col gap-6 mt-6'>
        <div className='border-b border-gray-light pb-3 flex gap-2'>
          <div>
            <MdArrowForwardIos size={20} />
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              @Stampinlove
            </div>
            <div>
              <Button
                bgColor='#F06852'
                w="auto"
                h='30px'
              >
                Detail
              </Button>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-light pb-3 flex gap-2'>
          <div>
            <MdArrowForwardIos size={20} />
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              @Stampinlove
            </div>
            <div>
              <Button
                bgColor='#F06852'
                w="auto"
                h='30px'
              >
                Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgencyListTemplate2