import React from 'react'
import StampGridItem from './stampGridItem';

type Props = {
  data: any;
}

const StampGrid = ({data}: Props) => {
  return (
    <div>
     <div className={`grid grid-cols-1 lg:grid-cols-4 gap-4`}>
      {data.map((item:any, key:any) => (
        <div key = {key} className = {``}>
          <StampGridItem data = {item} />
        </div>
      ))}
     </div>
    </div>
  )
}

export default StampGrid