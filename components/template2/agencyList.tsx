import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Button from '../button/button'
import ButtonOutline from '../button/buttonOutline'

const AgencyListTemplate2 = () => {
  const styled = {
    root: `
    py-6 px-8 bg-white rounded-3xl h-full drop-shadow-md
    `,
    title: `
    text-red flex justify-between items-center
    `,
    boxContent: `
    flex flex-col gap-6 mt-6
    `,
    boxItem: `
    border-b border-gray-light pb-3 flex gap-2
    `
  }
  return (
    <div className={`${styled.root}`}>
      <div className={`${styled.title}`}>
        <div>
          หน่วยงานที่เกี่ยวข้อง
        </div>
        <Button
          bgColor='#F06852'
          w="auto"
          h='30px'
        >
          View all
        </Button>
      </div>

      <div className={`${styled.boxContent}`}>
        <div className={`${styled.boxItem}`}>
          <div>
            <MdArrowForwardIos size={20} />
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              @Stampinlove
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
        <div className={`${styled.boxItem}`}>
          <div>
            <MdArrowForwardIos size={20} />
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              @Stampinlove
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
      </div>
    </div>
  )
}

export default AgencyListTemplate2