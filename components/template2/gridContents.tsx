import Image from 'next/image'
import React from 'react'
import { mockPost } from '../../constant/posts'
import Button from '../button/button'
import GridContentItem from './gridContentItem'

type Props = {}

const GridContents = (props: Props) => {
  return (
    <div className='myContainer  '>
      <div className='bg-white rounded-3xl p-4 shadow-md !mb-10'>
        <div className='my-3 flex justify-end'>
          <Button
            bgColor='#F06852'
            w="auto"
            h='30px'
          >
            View All
          </Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {mockPost.map((item, key) => (
            <React.Fragment key={key}>
              <GridContentItem
                title={item.title}
                image={item.image}
                createdAt={item.createdAt}
                key={key}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridContents