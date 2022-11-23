import React, { useMemo } from 'react'
import { mockDownloadList } from '../../constant/downloadList'
import Button from '../button/button'
import DownloadItem from '../items/downloadItem'
type Props = {}

const DownloadTable = (props: Props) => {
  const styled = useMemo(() => ({
    root: `
    p-6 border border-gray-light rounded-2xl shadow-lg bg-white
    `
  }), [])
  return (
    <div className={`${styled.root}`}>
      <div className='flex justify-between items-center'>
        <div className={`text-red cursor-pointer`}>ดาวน์โหลด</div>
        <Button
          bgColor='#D30D2B'
          w="auto"
          h='30px'
        >
          View All
        </Button>
      </div>
      <div>
        {mockDownloadList.map((item, key) => (
          <div key={key}>
            <DownloadItem
              name={item.name}
              createdAt={item.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DownloadTable