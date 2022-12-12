import React from 'react'
import StampListItem from './stampListItem';

type Props = {
  data: any;
}

const StampList = ({ data }: Props) => {
  return (
    <div>
      <div className={`grid grid-cols-1  divide-y divide-gray-light`}>
        {data.map((item: any, key: any) => (
          <div key={key} className={`py-3`}>
            <StampListItem data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StampList