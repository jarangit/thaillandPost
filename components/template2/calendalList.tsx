import React from 'react'
import { BsCalendar2Fill } from 'react-icons/bs'
import Button from '../button/button'
import { mockCalendalList } from '../../constant/calendal'
import ButtonOutline from '../button/buttonOutline'
type Props = {}

const CalendalList = (props: Props) => {
  const styled = {
    item: `
    border-b border-gray-light py-3 h-full last:border-0
    `
  }
  return (
    <div className='bg-white rounded-3xl py-6 drop-shadow-md'>
      <div className='flex justify-between items-center px-6'>
        <div className='text-red'>Catalog Stamp</div>
        <div>
          <Button
            bgColor='#F06852'
            w="auto"
            h='30px'
          >
            View all
          </Button>
        </div>
      </div>
      {/* item */}
      {mockCalendalList.map((item, key) => (
        <div key={key} className={`${styled.item}`}>
          <div className='px-6 flex justify-between w-full items-center cursor-pointer'>
            <div className='flex flex-col gap-3'>
              <div className='text-black'>Catalog Stamp ประจำเดือนมิถุนายน 2565.pdf</div>
              <div className='flex gap-2 items-center'>
                <div className='mb-1'>
                  <BsCalendar2Fill size={20} color={"#9B9898"} />
                </div>
                <div className='text-blue-dark text-sm'>10 กรกฎาคม 2565 09.00 น.</div>
              </div>
            </div>
            <div>
              <ButtonOutline
                outlineColor='#F06852'
              >
                Detail
              </ButtonOutline>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default CalendalList