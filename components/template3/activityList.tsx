import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { mockActivityList } from '../../constant/activity'
import ActivityItem from './activityItem'
type Props = {}

const ActivityList = (props: Props) => {
  return (
    <div className='my-6 bg-white p-6 rounded-3xl drop-shadow-md'>
      <div className='text-2xl text-blue'>
        ข่าวกิจกรรม
      </div>
      <div className='flex gap-3 mt-3 flex-wrap md:flex-nowrap justify-center'>
        {mockActivityList.map((item, key) => (
          <div key = {key}>
            <ActivityItem
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-end gap-1 items-center text-blue hover:text-red cursor-pointer mt-3'>
        <div>Read more</div>
        <div>
          <IoIosArrowDroprightCircle size={25} />
        </div>
      </div>
    </div>
  )
}

export default ActivityList