import React from 'react'
import { mockPost } from '../../constant/posts'
import PostCard from '../card/postCard'

type Props = {}

const PostSection = (props: Props) => {
  return (
    <div className={`myContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !py-8`}>
      {mockPost.map((item, key) => (
        <React.Fragment key = {key}>
          <PostCard
            title={item.title}
            image={item.image}
            desc={item.desc}
            createdAt={item.createdAt}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default PostSection