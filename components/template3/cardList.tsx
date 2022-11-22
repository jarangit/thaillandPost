import React from 'react'
import { mockPost } from '../../constant/posts'
import CardItem from './cardItem'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div className='grid grid-cols-3 gap-6'>
      {mockPost.slice(0, 3).map((item, key) => (
        <div className='col-span-3 md:col-span-1' key = {key}>
          <CardItem
            title={item.title}
            desc={item.desc}
          />
        </div>
      ))}
    </div>
  )
}

export default CardList